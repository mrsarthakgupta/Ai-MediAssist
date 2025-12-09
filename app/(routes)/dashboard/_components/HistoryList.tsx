'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AddNewSession from './AddNewSession';
import axios from 'axios';
import HistoryTable from './HistoryTable';
import { SessionDetails } from '../medical-agent/[sessionId]/page';

const HistoryList = () => {
    const [history, setHistory] = useState<SessionDetails[]>([]);

    useEffect(()=>{
      GetHistoryList();
    },[])

    const GetHistoryList = async() =>{
      const result = await axios.get('/api/session-chat?sessionId=all');
      console.log(result.data);
      setHistory(result.data);
    }

  return (
    <div className='mt-10'>
        {
            history.length===0?
            <div className='flex items-center flex-col justify-center p-7 border-dashed rounded-2xl border-2 mt-10'>
                <Image className='mt-20' src={'/medical-assistance.png'} alt='No History' width={180} height={180} />
                <h2 className='font-bold text-xl mt-2'>No Recent Consultations</h2>
                <p>It looks like you haven't had any consultations in the past.</p>
               <AddNewSession />
                </div>:
                <div>
                <HistoryTable history={history} />
                </div>
        }
    </div>
  )
}

export default HistoryList