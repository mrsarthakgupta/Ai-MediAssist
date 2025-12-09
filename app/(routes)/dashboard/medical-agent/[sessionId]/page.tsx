"use client"
import axios from "axios"
import { useParams } from "next/navigation"
import React, { useEffect, useRef , useState} from 'react'
import { Circle, PhoneCall, PhoneOff } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Vapi from "@vapi-ai/web";
import { useRouter } from "next/navigation"

export type SessionDetails = {
  id: number;
  sessionId: string;
  notes: string;
  conversation?: Message[];
  createdAt?: string;
  createdBy?: string;
  report?: {
    agent?: string;
    chiefComplaint?: string;
    recommendations?: string[];
    sessionId?: string;
    summary?: string;
    symptoms?: string[];
    timestamp?: string;
    user?: string;
    duration?: string;
    severity?: string;
    medicationsMentioned?: string[];
  };
  selectedDoctor: {
    id: number;
    specialist: string;
    description: string;
    image: string;
    agentPrompt: string;
    voiceId: string;
  };
  createdOn: string;
}

type Message = {
  role: string;
  text: string;
}

const MedicalVoiceAssistent = () => {
  const { sessionId } = useParams();
  const [sessionDetails, setSessionDetails] = useState<SessionDetails>();
  const [callStarted, setCallStarted] = useState(false);
  const [currentRole, setCurrentRole] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>();
  const [messages, setMessages] = useState<Message[]>([]);
    const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const vapiRef = useRef<Vapi | null>(null);
  const messagesRef = useRef<Message[]>([]);
  const sessionDetailsRef = useRef<SessionDetails | null>(null);

  // Move VapiAgentConfig outside useEffect so it can be accessed in startCall
  

  useEffect(() => {
    // Clean up previous Vapi instance if it exists
    if (vapiRef.current) {
      vapiRef.current.stop();
      vapiRef.current = null;
    }
    vapiRef.current = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);

    vapiRef.current.on("call-start", () => {
      setCallStarted(true);
      console.log("Call started");
    });
    vapiRef.current.on("call-end", () => {
      setCallStarted(false);
      console.log("Call ended");
      
      // If there are messages when call ends, save them
      if (messagesRef.current.length > 0 && !error) {
        console.log("Call ended with messages, saving conversation");
        setTimeout(() => {
          GenrateReport().catch(reportError => {
            console.error("Error saving report:", reportError);
          });
        }, 1000);
      }
    });
    vapiRef.current.on("message", (message) => {
      if (message.type === "transcript") {
        // Some APIs use message.data for payload, check both
        const {role,transcriptType, transcript} = message;
        console.log(`${message.role}: ${message.transcript}`);
        if(transcriptType === "partial") {
         setLiveTranscript(transcript);
         setCurrentRole(role);
        }
        else if(transcriptType === "final") {
          const newMessages = [...messagesRef.current, {role : role, text: transcript}];
          setMessages(newMessages);
          messagesRef.current = newMessages;
          setLiveTranscript("");
          setCurrentRole(null);
          // Final transcript received, you can handle it here
        }
        
      }
    });
    vapiRef.current.on("error", (error: any) => {
      console.error("Vapi error:", error);
      console.log("Error type:", error.error?.type);
      console.log("Error message:", error.errorMsg);
      
      if (error.error?.type === 'ejected' || error.errorMsg === 'Meeting has ended' || error.action === 'error') {
        console.log("Meeting ejection detected - handling gracefully");
        setCallStarted(false);
        setError("Call ended unexpectedly. Your conversation has been saved.");
        
        // Generate report if there are enough messages using ref
        if (messagesRef.current.length >= 2) {
          console.log("Saving conversation with messages:", messagesRef.current.length);
          setTimeout(() => {
            GenrateReport().catch(reportError => {
              console.error("Error saving report:", reportError);
            });
          }, 1000);
        } else {
          console.log("No sufficient messages to save (need at least 2, have:", messagesRef.current.length, ")");
        }
      } else {
        setError("An error occurred with the voice assistant. Please try again.");
        setCallStarted(false);
      }
    });
    
    vapiRef.current.on("speech-start", () => {
       console.log('Assistant started speaking');
      setCurrentRole("Assistent");
    });

    vapiRef.current.on("speech-end", () => {
      console.log('Assistant finished speaking');
      setCurrentRole("Patient");
    });
    sessionId && GetSessionDetails();

    // Clean up Vapi instance on unmount
    return () => {
      if (vapiRef.current) {
        vapiRef.current.stop();
        vapiRef.current = null;
      }
    };
    // eslint-disable-next-line
  }, [sessionId]);

  const GetSessionDetails = async () => {
   try {
      setError(null);
      setLoading(true);
      const result = await axios.get(`/api/session-chat?sessionId=${sessionId}`);
      console.log("Session Details:", result.data); // Debug log
      
      // If the result is an array, take the first item
      const sessionData = Array.isArray(result.data) ? result.data[0] : result.data;
      
      if (!sessionData.selectedDoctor) {
        throw new Error("No doctor details found in session");
      }

      setSessionDetails(sessionData);
      sessionDetailsRef.current = sessionData; // Store in ref for error handlers
    } catch (error) {
      console.error("Error fetching session:", error);
      setError(error instanceof Error ? error.message : "Failed to fetch session details");
    } finally {
      setLoading(false);
    }
  };

  const startCall = () => {
    try {
      setError(null); // Clear any previous errors
      
      if (!sessionDetailsRef.current?.selectedDoctor) {
        throw new Error("Doctor details not loaded");
      }
      
      // Log configuration for debugging
      console.log("Starting call with doctor:", sessionDetailsRef.current?.selectedDoctor?.specialist);
      console.log("Voice ID:", sessionDetailsRef.current?.selectedDoctor?.voiceId);
      console.log("Starting call with doctor:", sessionDetails?.selectedDoctor?.specialist);
      console.log("Voice ID:", sessionDetails?.selectedDoctor?.voiceId);
      
      const VapiAgentConfig = {
        name: "AI Medical Doctor Voice Assistant",
        firstMessage: "Hello, I am your AI medical assistant. How can I help you today?",
        transcriber: {
          provider: "deepgram",
          model: "nova-2",
          language: "en",
        },
        voice: {
          provider: "vapi",
          voiceId: sessionDetails?.selectedDoctor?.voiceId || "Rohan",
        },
        model: {
          provider: "google",
          model: "gemini-2.0-flash",
          messages: [
            {
              role: "system",
              content: sessionDetailsRef.current?.selectedDoctor?.agentPrompt || "You are a helpful medical assistant. Please provide supportive and informative responses.",
            },
          ],
        },
      };
    
      //@ts-ignore
      vapiRef.current?.start(VapiAgentConfig);
    } catch (error) {
      console.error("Error starting call:", error);
      setError(error instanceof Error ? error.message : "Failed to start call");
    }
  };

  const disconnectCall = async() => {
    try {
      setError(null);
      vapiRef.current?.stop();
      setCallStarted(false);
      
      console.log("Disconnect - Messages count:", messagesRef.current.length);
      
      // Generate report if there are messages (at least 2 for a conversation)
      if (messagesRef.current.length >= 2) {
        console.log("Generating report for messages:", messagesRef.current);
        await GenrateReport();
      } else {
        console.log("Skipping report generation - insufficient messages");
      }
      
      router.replace('/dashboard');
    } catch (error) {
      console.error("Error during disconnect:", error);
      setError("Error ending call. Navigating to dashboard...");
      // Still navigate to dashboard even if report generation fails
      setTimeout(() => router.replace('/dashboard'), 2000);
    }
  };

  const sanitizeJSON = (jsonString: string | undefined | null) => {
    if (!jsonString || typeof jsonString !== 'string') {
      console.error('Invalid input to sanitizeJSON:', jsonString);
      throw new Error('Invalid JSON response');
    }

    try {
      // Remove trailing commas before parsing
      const sanitized = jsonString.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
      return JSON.parse(sanitized);
    } catch (error) {
      console.error('Failed to sanitize JSON:', error);
      throw new Error('Invalid JSON response');
    }
  };

  const GenrateReport=async()=>{
     try {
      // Validate data before sending
      if (!sessionId) {
        console.error("Cannot generate report: sessionId is missing");
        return;
      }
      
      if (!sessionDetailsRef.current) {
        console.error("Cannot generate report: sessionDetails is missing");
        return;
      }
      
      if (!messagesRef.current || messagesRef.current.length === 0) {
        console.error("Cannot generate report: no messages available");
        return;
      }
      
      console.log("Generating report with data:", {
        messagesCount: messagesRef.current.length,
        messages: messagesRef.current,
        sessionDetails: sessionDetailsRef.current,
        sessionId: sessionId
      });
      
      const result = await axios.post('/api/medical-report', {
        messages: messagesRef.current,
        sessionDetails: sessionDetailsRef.current,
        sessionId
      });
      
      // Check if the report field exists
      if (!result.data.report) {
        console.error("API response is missing the 'report' field:", result.data);
        throw new Error("Invalid API response: 'report' field is missing");
      }

      // Sanitize and parse the report
      const parsedReport = sanitizeJSON(JSON.stringify(result.data.report));
      console.log("Report generated:", parsedReport);
      return parsedReport;
    } catch (error) {
      console.error("Error generating report:", error);
      if (error && typeof error === 'object' && 'response' in error) {
        console.error("Error response data:", (error as any).response?.data);
        console.error("Error response details:", JSON.stringify((error as any).response?.data, null, 2));
      }
      throw error;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="p-5 border rounded-3xl bg-secondary">
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <h2 className="p-1 px-2 border rounded-md flex gap-2 items-center">
          <Circle className={`h-4 w-4 rounded-full ${callStarted ? 'bg-green-500' : 'bg-red-500'}`} />
          {callStarted ? 'Connected...' : 'Not Connected'}
        </h2>
        <h2 className="font-bold text-xl text-gray-400">00:00</h2>
      </div>
      {sessionDetails && <div className="flex items-center flex-col mt-10">
        <Image src={sessionDetails.selectedDoctor?.image}
          alt={sessionDetails?.selectedDoctor?.specialist}
          width={120}
          height={120}
          className="h-[100px] w-[100px] object-cover rounded-full" />
        <h2 className="mt-2 text-lg">{sessionDetails?.selectedDoctor?.specialist}</h2>
        <p className="text-sm text-gray-400">AI Medical Voice assistant</p>

        <div className="mt-32 overflow-y-auto">
          {/* <h2 className="text-gray-400">Assistant msg</h2> */}
          {messages?.slice(-4).map((msg:Message, index) => (
            <div key={index}>
              <h2 className="text-gray-400 p-2">{msg.role} : {msg.text}</h2>
            </div>
            
          ))}
          {liveTranscript && liveTranscript?.length > 0 && <h2 className="text-lg">{`${currentRole}:`}{liveTranscript}</h2>}
        </div>

        {!callStarted ?
          <Button className="mt-20" onClick={startCall}><PhoneCall /> Start Call</Button>
          :
          <Button variant={"destructive"} className="mt-20" onClick={disconnectCall}><PhoneOff /> Disconnect</Button>
        }
      </div>}
    </div>
  );
}

export default MedicalVoiceAssistent