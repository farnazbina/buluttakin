import React from 'react'
import { Line } from 'rc-progress';
import { Button } from '@headlessui/react'


const FormationStatus = () => {
  return (
    <div className='josefin-font border border-gray-200 border-solid rounded-3xl shadow-md mt-4 p-6'>
      <span className='text-2xl font-bold text-gray-900'>FormationStatus</span>
      <span className='font-bold block mt-4 mb-5 text-gray-900 leading-4'>In progress</span> 
      <div>
        <Line percent={70} strokeWidth={8} trailWidth={8} strokeColor="#6941C6" trailColor='#D0D5DD' />
      </div>
      <span className='font-bold block mt-6 mb-2 text-gray-900 leading-4'>Estimated processing</span>
      <span className='font-bold text-gray-500 leading-4'>4-5 business days </span>
      <Button className="mt-6 items-center rounded-lg h-[42px] bg-brand-700 w-full font-semibold text-white hover:bg-brand-400 hover:text-gray-900 transition-all duration-300 ease-in-out">
      View status
      </Button>
    </div>
  )
}
 
export default FormationStatus