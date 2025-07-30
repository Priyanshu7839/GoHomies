import React from 'react'
import AboutUsHeader from '../../Components/AboutUs/AboutUsHeader'
import AboutUsDetails from '../../Components/AboutUs/AboutUsDetails'
import AboutUsMembers from '../../Components/AboutUs/AboutUsMembers'
import Footer from '../../Components/Footer/Footer'

const AboutUs = () => {
  return (
    <div className="flex  flex-col">
      <AboutUsHeader/>
      <AboutUsDetails/>
      <AboutUsMembers/>
      <Footer/>
    </div>
  )
}

export default AboutUs
