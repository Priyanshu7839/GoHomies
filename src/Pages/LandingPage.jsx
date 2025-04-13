import React from 'react'
import { Header, Navbar, PostCreationSection, TopPackages } from '../Components'
import Feed from '../Components/Feed/Feed'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <TopPackages/>
        <PostCreationSection/>
        {/* <Feed/> */}
    </div>
  )
}

export default LandingPage