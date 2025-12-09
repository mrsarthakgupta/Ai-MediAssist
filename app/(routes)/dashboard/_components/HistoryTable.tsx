import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SessionDetails } from '../medical-agent/[sessionId]/page'
import { Button } from '@/components/ui/button'
import ViewReportDialog from './ViewReportDialog'
// import moment from 'moment/moment'

type Props = {
    history:SessionDetails[]
}

const HistoryTable = ({history}:Props) => {
  return (
    <div className='flex items-center flex-col justify-center p-7 mt-10 '>
    <Table className='w-full border border-accent-foreground/20'>
  <TableCaption>Previous Consultations Reports</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">AI Medical Specialist</TableHead>
      <TableHead className='pl-70'>Description</TableHead>
      {/* <TableHead>Date</TableHead> */}
      <TableHead className="text-right">Report</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {history.slice(-4).map((record:SessionDetails , index: number)=>
    <TableRow key={index}>
      <TableCell className="font-medium">{record.selectedDoctor.specialist}</TableCell>
      <TableCell className='pl-70'>{record.notes}</TableCell>
      {/* <TableCell>{record.createdOn}</TableCell> */}
      <TableCell className="text-right"><ViewReportDialog record={record}/></TableCell>
    </TableRow>
    )}
    
  </TableBody>
</Table>
</div>
  )
}

export default HistoryTable