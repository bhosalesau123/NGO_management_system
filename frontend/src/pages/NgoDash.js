import React from 'react'
import Expenditure from "../pages/Expenditure"
import Header from '../components/Header'
import Footer from "../components/Footer1"
import  "../styles/NgoDash.css"
const NgoDash = () => {
  return (
    <div>
      <h1 className='Heading'>Ngo DashBoard</h1>
      <Header/>
      <div className="button-group">
      <button className="blue-button">Donations</button>
      <button className="blue-button">Expenditures</button>
    </div>
      {/* <Expenditure/> */}
    </div>
  )
}

export default NgoDash
