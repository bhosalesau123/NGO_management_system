import React from 'react'
import Vision from "../components/Vision"
 import Programs from "../components/Programs"
 import JoinUs from "../components/JoinUs"
import Ngo from  "../components/Ngocard"
import Impact from '../components/Impact'
import Footer from  "../components/Footer1"




const Layout = () => {
  return (
    <div className='Layout'>
      <Vision/>
      <JoinUs/>
      <Ngo/>
      <Impact/>
      <Footer/>
      {/* <Ngo/>
      <Footer/> */}

    </div>
  )
}

export default Layout
