import React from 'react'
import {
    NotificationIcon,
    MessageIcon,
    CalendarIcon,
    ArrowIcon
} from '../../../assets/icons/index'
import FormationStatus from './FormationStatus'
import ToDoList from './ToDoList'

const InformationSidebar = () => {
  return (
    <div className='bg-white rounded-3xl p-4 shadow-md'>
        <div className="info-bar flex flex-row items-center justify-between">
            <CalendarIcon />
            <NotificationIcon />
            <MessageIcon />
            <img
                src={require("../../../assets/images/Frame.png")}
                alt="hi"
            />
            <ArrowIcon />
        </div>
        <FormationStatus />
        <ToDoList /> 
        <div className='mt-8'>
          <span className='text-gray-900 font-bold leading-5'>Board meeting</span>
          <span className='font-bold text-gray-400 text-sm block my-3 leading-4'>Feb 22 at 6:00 PM</span>
          <span className='font-bold text-gray-400 text-xs leading-4'>
            You have been invited to attend a
            meeting of the Boeard Diretors.
            </span>
        </div>
    </div>
  )
}

export default InformationSidebar