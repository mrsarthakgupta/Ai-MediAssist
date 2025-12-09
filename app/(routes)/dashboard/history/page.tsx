import React from 'react'
import HistoryList from '../_components/HistoryList'

const HistoryPage = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl'>Consultation History</h2>
      <p className='text-sm text-gray-500 mt-1'>Review your previous AI medical consultations and open reports.</p>
      <HistoryList />
    </div>
  )
}

export default HistoryPage