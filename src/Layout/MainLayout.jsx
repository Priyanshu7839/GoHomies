import React from 'react'
import { Navbar } from '../Components'
import { Outlet } from 'react-router'
import AppAppBar from '../AppAppBar/AppAppBar'

const MainLayout = () => {
  return (
    <div>
        {/* <Navbar/> */}
        
        <AppAppBar/>
        <Outlet/>
    </div>
  )
}

export default MainLayout