import React from 'react'

const ReportCardItem = (props: any) => {
  return (
    <div className='bg-white rounded-3xl p-4 shadow-md shadow-transparent transition-all duration-300 ease-in-out border border-solid border-white hover:border-brand-700 hover:shadow-brand-200'>
        {props.item.icon}
        <h1 className='text-gray-900 font-bold text-[32px] my-2'>{props.item.report}</h1>  
        <span className='text-sm text-gray-600 font-bold block w-2/3'>{props.item.description}</span> 
    </div>
  )
}

export default ReportCardItem