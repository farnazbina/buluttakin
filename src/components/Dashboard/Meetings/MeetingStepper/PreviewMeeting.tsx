import React from 'react'

const PreviewMeeting = () => {
  return (
    <div className='mt-16'>
        <div className='mb-8 flex items-center'>
            <span className='text-gray-500 font-semibold leading-5'>Email:</span>
            <span className='text-gray-900 font-semibold leading-5'>Test@gmail.com</span>
        </div>
        <div className='mb-8 flex items-center'>
            <span className='text-gray-500 font-semibold leading-5'>Date:</span>
            <span className='text-gray-900 font-semibold leading-5'>1402/12/07 - 10:00 - Tuesday</span>
        </div>
        <div className='mb-8 flex items-center'>
            <span className='text-gray-500 font-semibold leading-5'>Course:</span>
            <span className='text-gray-900 font-semibold leading-5'>Accounting Tax - Mehrdad Moradpour</span>
        </div> 
    </div>
  )
}

export default PreviewMeeting