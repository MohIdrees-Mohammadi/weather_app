import SearchText from '@/components/SearchText'
import SideBar from '@/components/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' flex bg-primary text-white lg:h-screen gap-5 p-3 overflow-hidden'>
        <SideBar />
        <div className='flex flex-col w-full  '>
        <SearchText />
        <Outlet />
        </div>
    </div>
  )
}

export default Layout