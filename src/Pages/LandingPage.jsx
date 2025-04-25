import React from 'react'
import { Header, Navbar, PostCreationSection, PostFeedSection, TopPackages } from '../Components'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <TopPackages/>
        <PostCreationSection/>
        <PostFeedSection/>
    </div>
  )
}

export default LandingPage