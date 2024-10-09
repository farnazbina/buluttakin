import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

const DefaultLayout = () => {
  return (
    <div className='h-screen flex w-full bg-gray-100'>
      <Sidebar />
      <div className='w-full pt-5 overflow-auto'>
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout