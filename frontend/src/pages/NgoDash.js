import React from 'react'
import Expenditure from "../pages/Expenditure"
import Header from '../components/Header'
import Footer from "../components/Footer1"
import Ngo from "../components/Ngocard"
import  "../styles/NgoDash.css"
const NgoDash = () => {
  return (
    <div>
      <h1 className='Heading'>Ngo DashBoard</h1>
      <Header/>
      <Ngo/>
      {/* <Expenditure/> */}
    </div>
  )
}

export default NgoDash
