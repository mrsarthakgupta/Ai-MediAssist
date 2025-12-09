"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { DialogClose } from '@radix-ui/react-dialog'
import axios from 'axios'
import { doctorAgent } from './DoctorAgentCard'
import { Loader2 } from 'lucide-react'
import SuggestedDoctorCard from './SuggestedDoctorCard'

const AddNewSession = () => {
  const [note, setNote] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [suggestedDoctor, setSuggestedDoctor] = useState<doctorAgent[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent>();
  const router = useRouter();

  const OnClickNext = async() => {
    try {
      setLoading(true);
      const result = await axios.post('/api/suggest-doctors', {
        notes: note
      });
      // Check if result.data.doctors exists and is an array
      const doctors = Array.isArray(result.data.doctors) ? result.data.doctors : 
                     Array.isArray(result.data) ? result.data : [];
      console.log(doctors[0]);
      setSuggestedDoctor(doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setLoading(false);
    }
  }

  const onStartConsultation = async() => {
    try {
      setLoading(true);
      const result = await axios.post('/api/session-chat', {
        notes: note,
        selectedDoctor: selectedDoctor
      });
      
      if (result.data?.sessionId) {
        router.push(`/dashboard/medical-agent/${result.data.sessionId}`);
      }
    } catch (error) {
      console.error('Error starting consultation:', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className='mt-7'>+ Start a Consultation</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Basic Details</DialogTitle>
            <DialogDescription asChild>
              {!suggestedDoctor.length ? (
                <div>
                  <h2>Add Symptoms or Any Other Details.</h2>
                  <Textarea 
                    placeholder='Add Details Here'
                    className='mt-3 h-24'
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                  />
                </div>
              ) : (
                <div className='grid grid-cols-3 gap-5'>
                  {suggestedDoctor.map((doctor, id) => (
                    <SuggestedDoctorCard 
                      key={id} 
                      doctorAgent={doctor} 
                      setSelectedDoctor={() => setSelectedDoctor(doctor)}
                      selectedDoctor={selectedDoctor}
                    />
                  ))}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            {!suggestedDoctor.length ? (
              <Button 
                disabled={!note || loading} 
                onClick={OnClickNext}
              >
                Next {loading && <Loader2 className='animate-spin'/>}
              </Button>
            ) : (
              <Button 
                disabled={!selectedDoctor || loading} 
                onClick={onStartConsultation}
              >
                Start Consulting {loading && <Loader2 className='animate-spin'/>}
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewSession