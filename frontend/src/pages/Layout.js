import React from 'react'
import Vision from "../components/Vision"
import Ngo from  "../components/Ngocard"
import About from  "../components/About"
import Footer from  "../components/Footer1"




const Layout = () => {
  return (
    <div className='Layout'>
      <Vision/>
      <Ngo/>
      <About/>
      <Footer/>

    </div>
  )
}

export default Layout
