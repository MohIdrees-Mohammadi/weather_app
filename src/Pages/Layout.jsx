import SearchText from '@/components/SearchText'
import SideBar from '@/components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex bg-primary text-white h-screen gap-5 p-5'>
        <SideBar />
        <div className='flex flex-col  w-screen'>
        <SearchText />
        <Outlet />
        </div>
    </div>
  )
}

export default Layout