import React from 'react'
import { Header, Navbar, PostCreationSection, PostFeedSection, TopPackages } from '../Components'
import Feed from '../Components/Feed/Feed'
import { useSelector } from 'react-redux'
import AppAppBar from '../AppAppBar/AppAppBar'

const LandingPage = () => {

  const UserData = useSelector((state)=>state.UserData)



  return (
    <div className='flex flex-col'>
        {/* <Navbar/> */}
        <Header/>
        <TopPackages/>
        <PostCreationSection/>
        <PostFeedSection/>
        {/* <Feed/> */}
    </div>
  )
}

export default LandingPage