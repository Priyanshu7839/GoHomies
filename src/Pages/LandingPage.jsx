import React from 'react'
import { Header, Navbar, PostCreationSection, PostFeedSection, TopPackages } from '../Components'
import Feed from '../Components/Feed/Feed'

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-0'>
        <Navbar/>
        <Header/>
        <TopPackages/>
        <PostCreationSection/>
        <PostFeedSection/>
        {/* <Feed/> */}
    </div>
  )
}

export default LandingPage