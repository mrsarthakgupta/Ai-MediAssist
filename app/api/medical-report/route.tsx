import { db } from "@/config/db";
import { openai } from "@/config/OpneAiModel";
import { SessionChatTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

// Type definitions
interface Message {
    role: string;
    text: string;
}

interface ReportData {
    sessionId: string;
    agent: string;
    user: string;
    timestamp: string;
    chiefComplaint: string;
    summary: string;
    symptoms: string[];
    duration: string;
    severity: string;
    medicationsMentioned: string[];
    recommendations: string[];
}

const REPORT_GEN_PROMPT = `You are an AI Medical Voice Agent that just finished a voice conversation with a user. Based on doctor AI agent info and conversation between AI medical agent and user, Generate the medical report in JSON format as mentioned above., generate a structured report with the following fields:

1. sessionId: a unique session identifier
2. agent: the medical specialist name (e.g., "General Physician AI")
3. user: name of the patient or "Anonymous" if not provided
4. timestamp: current date and time in ISO format
5. chiefComplaint: one-sentence summary of the main health concern
6. summary: a 2-3 sentence summary of the conversation, symptoms, and recommendations
7. symptoms: list of symptoms mentioned by the user
8. duration: how long the user has experienced the symptoms
9. severity: mild, moderate, or severe
10. medicationsMentioned: list of any medicines mentioned
11. recommendations: list of AI suggestions (e.g., rest, see a doctor)

Return the result in this JSON format:
{
  "sessionId": "string",
  "agent": "string",
  "user": "string",
  "timestamp": "ISO Date string",
  "chiefComplaint": "string",
  "summary": "string",
  "symptoms": ["symptom1", "symptom2"],
  "duration": "string",
  "severity": "string",
  "medicationsMentioned": ["med1", "med2"],
  "recommendations": ["rec1", "rec2"]
}

Only include valid fields. Respond with nothing else.`;

export async function POST(req: NextRequest) {
    try {
        // Input validation
        let requestBody;
        try {
            requestBody = await req.json();
        } catch (parseError) {
            console.error("Failed to parse request JSON:", parseError);
            return NextResponse.json(
                { error: "Invalid JSON in request body" },
                { status: 400 }
            );
        }
        
        console.log("Medical Report API - Request body:", JSON.stringify(requestBody, null, 2));
        
        const { sessionId, sessionDetails, messages } = requestBody;
        
        console.log("Extracted fields:", {
            sessionId: sessionId,
            sessionDetails: !!sessionDetails,
            messages: Array.isArray(messages) ? messages.length : 'not array',
            messagesType: typeof messages
        });

        if (!sessionId || !sessionDetails || !messages || !Array.isArray(messages)) {
            return NextResponse.json(
                { 
                    error: "Missing required fields",
                    details: {
                        sessionId: !sessionId,
                        sessionDetails: !sessionDetails,
                        messages: !messages,
                        messagesIsArray: Array.isArray(messages)
                    }
                },
                { status: 400 }
            );
        }

        // Check if messages array is empty
        if (messages.length === 0) {
            return NextResponse.json(
                { 
                    error: "No messages to generate report from",
                    sessionId: sessionId
                },
                { status: 400 }
            );
        }

        // Generate report using OpenAI
        const userInput = `AI Doctor Agent Info: ${JSON.stringify(sessionDetails)}\nConversation: ${JSON.stringify(messages)}`;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", // Using standard GPT model
            messages: [
                { role: "system", content: REPORT_GEN_PROMPT },
                { role: "user", content: userInput }
            ],
            temperature: 0.7,
            max_tokens: 1000
        });

        const response = completion.choices[0]?.message?.content;
        if (!response) {
            throw new Error("No response from OpenAI");
        }

        // Parse and validate the OpenAI response
        const cleanResponse = response.trim().replace(/```json\n?|```/g, '');
        let reportData: ReportData;
        
        try {
            reportData = JSON.parse(cleanResponse);
            reportData.sessionId = sessionId;
            reportData.timestamp = new Date().toISOString();
        } catch (parseError) {
            console.error("Failed to parse OpenAI response:", cleanResponse);
            return NextResponse.json(
                { 
                    error: "Failed to parse AI response",
                    details: parseError instanceof Error ? parseError.message : String(parseError),
                    response: cleanResponse
                },
                { status: 500 }
            );
        }

        // Update the database
        try {
            await db
                .update(SessionChatTable)
                .set({
                    conversation: messages,
                    report: reportData
                })
                .where(eq(SessionChatTable.sessionId, sessionId));

            return NextResponse.json({ 
                success: true, 
                report: reportData,
                sessionId: sessionId
            });
        } catch (dbError) {
            console.error("Database update error:", dbError);
            return NextResponse.json(
                { 
                    error: "Failed to update database",
                    details: dbError instanceof Error ? dbError.message : String(dbError),
                    query: {
                        sessionId,
                        messageCount: messages.length,
                    }
                },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error("Error in medical report generation:", error);
        return NextResponse.json(
            { 
                error: "Internal server error",
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        );
    }
}