import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export type doctorAgent = {
    id: number,
    specialist: string,
    description: string,
    image: string,
    agentPrompt: string,
    voiceId?: string,
}

type Props = {
    doctor: doctorAgent
}


const DoctorAgentCard = ({doctor}: Props) => {
  const [selectedDoctor, setSelectedDoctor] = useState<doctorAgent>();

  useEffect(() => {
    setSelectedDoctor(doctor);
  }, [doctor]);

    const router = useRouter();
  const onStartConsultation = async() => {
    try {
      // setLoading(true);
      const result = await axios.post('/api/session-chat', {
        notes: "",
        selectedDoctor: selectedDoctor
      });
      
      if (result.data?.sessionId) {
        router.push(`/dashboard/medical-agent/${result.data.sessionId}`);
      }
    } catch (error) {
      console.error('Error starting consultation:', error);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <div className='border-b py-4'>
      <Image src={doctor.image} alt={doctor.specialist} width={200} height={300} className='w-full h-[250px] rounded-2xl object-cover' />
      <h2 className='font-bold mt-1'>{doctor.specialist}</h2>
      <p className='line-clamp-2 text-sm text-gray-500'>{doctor.description}</p>
      <Button className='w-full mt-2' onClick={onStartConsultation}>Start Consult 🡪</Button>
    </div>
  )
}

export default DoctorAgentCard