import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { SessionDetails } from '../medical-agent/[sessionId]/page'
import moment from 'moment/moment'

type Props = {
    record:SessionDetails
}

const ViewReportDialog = ({record}:Props) => {
  return (
    <Dialog>
  <DialogTrigger asChild>
    <Button variant={"outline"} size={"sm"}>View Report</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle asChild>
        <h2 className='text-center text-4xl'>Medical AI Voice Agent Report</h2>
      </DialogTitle>
      <DialogDescription asChild>
        <div className='mt-10 max-h-[70vh] overflow-y-auto'>
           <div>
                <h2 className='text-lg font-semibold text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                  Session Info
                </h2>
                <div className='space-y-3'>
                  <div className='flex justify-between'>
                    <span className='font-medium text-gray-600'>Doctor:</span>
                    <span className='text-gray-800'>{record.selectedDoctor?.specialist || 'General Physician'}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium text-gray-600'>User:</span>
                    <span className='text-gray-800'>{record.report?.user || 'Anonymous'}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium text-gray-600'>Consulted On:</span>
                    <span className='text-gray-800'>
                      {moment(record.createdOn).format('MMMM Do YYYY, h:mm a')}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='font-medium text-gray-600'>Agent:</span>
                    <span className='text-gray-800'>{record.report?.agent || 'General Physician AI'}</span>
                  </div>
                </div>
              </div>

              {/* Chief Complaint */}
              {record.report?.chiefComplaint && (
                <div>
                  <h2 className='text-lg font-semibold text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                    Chief Complaint
                  </h2>
                  <p className='text-gray-700 leading-relaxed'>
                    {record.report.chiefComplaint}
                  </p>
                </div>
              )}

              {/* Summary */}
              {record.report?.summary && (
                <div>
                  <h2 className='text-lg font-semibold text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                    Summary
                  </h2>
                  <p className='text-gray-700 leading-relaxed'>
                    {record.report.summary}
                  </p>
                </div>
              )}

              {/* Symptoms */}
              {record.report?.symptoms && record.report.symptoms.length > 0 && (
                <div>
                  <h2 className='text-lg font-semibold text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                    Symptoms
                  </h2>
                  <ul className='space-y-2'>
                    {record.report.symptoms.map((symptom: string, index: number) => (
                      <li key={index} className='flex items-center text-gray-700'>
                        <span className='w-2 h-2 bg-blue-400 rounded-full mr-3'></span>
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Duration & Severity */}
              {(record.report?.duration || record.report?.severity) && (
                <div>
                  <h2 className='text-lg font-semibold text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                    Additional Details
                  </h2>
                  <div className='space-y-3'>
                    {record.report.duration && (
                      <div className='flex justify-between'>
                        <span className='font-medium text-gray-600'>Duration:</span>
                        <span className='text-gray-800'>{record.report.duration}</span>
                      </div>
                    )}
                    {record.report.severity && (
                      <div className='flex justify-between'>
                        <span className='font-medium text-gray-600'>Severity:</span>
                        <span className={`font-medium ${
                          record.report.severity === 'severe' ? 'text-red-600' :
                          record.report.severity === 'moderate' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {record.report.severity}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Medications Mentioned */}
              <div>
                <h2 className='text-lg font-semibold mt-15 text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                  Medications Mentioned
                </h2>
                {record.report?.medicationsMentioned && record.report.medicationsMentioned.length > 0 ? (
                  <ul className='space-y-2'>
                    {record.report.medicationsMentioned.map((medication: string, index: number) => (
                      <li key={index} className='flex items-center text-gray-700'>
                        <span className='w-2 h-2 bg-green-400 rounded-full mr-3'></span>
                        {medication}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className='text-gray-500 italic'>No medications mentioned</p>
                )}
              </div>

              {/* Recommendations */}
              {record.report?.recommendations && record.report.recommendations.length > 0 && (
                <div>
                  <h2 className='text-lg font-semibold text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                    Recommendations
                  </h2>
                  <ul className='space-y-2'>
                    {record.report.recommendations.map((recommendation: string, index: number) => (
                      <li key={index} className='flex items-start text-gray-700'>
                        <span className='w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0'></span>
                        {recommendation}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Session Notes */}
              {record.notes && (
                <div>
                  <h2 className='text-lg font-semibold mt-15 text-blue-500 mb-4 pb-2 border-b-2 border-blue-200'>
                    Session Notes
                  </h2>
                  <div className='bg-gray-50 p-4 rounded-lg border-l-4 border-blue-400'>
                    <p className='text-gray-700'>{record.notes}</p>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className='bg-blue-50 p-4 rounded-lg border border-blue-200 mt-15'>
                <h3 className='font-semibold text-blue-800 mb-2'>Important Notice</h3>
                <p className='text-sm text-blue-700'>
                  This report was generated by an AI medical assistant and should not replace professional medical advice. 
                  Please consult with a healthcare provider for proper diagnosis and treatment.
                </p>
              </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default ViewReportDialog