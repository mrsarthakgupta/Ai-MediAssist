import React from 'react'
import type { doctorAgent } from './DoctorAgentCard'
import Image from 'next/image'

type Props = {
    doctorAgent: doctorAgent,
    setSelectedDoctor: (doctor: doctorAgent) => void,
    selectedDoctor?: doctorAgent
}

const SuggestedDoctorCard = ({doctorAgent,setSelectedDoctor,selectedDoctor}:Props) => {
  return (
    <div className={`flex flex-col items-center justify-between border 
    rounded-2xl shadow p-5 hover:border-blue-600 cursor-pointer
    ${selectedDoctor?.id == doctorAgent.id ? 'border-blue-600' : ''}`} onClick={()=>setSelectedDoctor(doctorAgent)}>
        <Image src={doctorAgent.image} alt={doctorAgent.specialist || 'Doctor'} width={70} height={70} className='w-full h-[150px] rounded-2xl object-cover'/>
        <h2 className='font-bold mt-1 text-center'>{doctorAgent.specialist}</h2>
        <p className='line-clamp-2 text-xs text-gray-500'>{doctorAgent.description}</p>
        {/* <Button className='w-full mt-2 text-[11px]'>Start Consult 🡪</Button> */}
    </div>
  )
}

export default SuggestedDoctorCard