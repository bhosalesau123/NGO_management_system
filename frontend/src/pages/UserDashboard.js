import React from 'react'
import Header from "../components/Header"
import Ngo from "../components/Ngocard"

const UserDashboard = () => {
  return (
    <div className='admin-dash'>
      <h1>User Dashboard</h1>
      <Header/>
      <Ngo/>
    </div>
  )
}

export default UserDashboard
