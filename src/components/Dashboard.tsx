import React from 'react'
import Sidebar from './Sidebar'
import MainCard from './MainCard'

const Dashboard:React.FC = () => {
  return (
    <div className='dashboard-page'>
      <Sidebar />
      <MainCard />
    </div>
  )
}

export default Dashboard