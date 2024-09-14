import React from 'react'
import Header from "../components/Header"
import Ngo from "../components/Ngocard"
import Addngo from "../components/AdminAddNgo"

const Admdash = () => {
  return (
    <div className='admin-dash'>
        <h1>Admin Dashboard</h1>
      <Header/>
    <Addngo/>
      <Ngo/>
    </div>
  )
}

export default Admdash
