import React from 'react'
import icons from './../assets/icons/icons8-search-50.png';
export default function FeedbackBar() {
  return (
    <>
        <nav className='w-full h-[8vh] rounded-md  bg-[#373e68]'>
            <div className='p-[2vh]'>
                <div className='flex justify-between flex-row-reverse'>
                        <div className='flex  bg-white rounded-md w-2/5 relative'>
                            <input type="text" name="" id="" className='rounded outline-none placeholder:text-[12px] px-3  py-1
                              text-gray-600 text-sm translate-x-[-13px]
                              
                               ' placeholder='اسمشو بگو پیدا کنم؟؟؟' />
                                <img src={icons} className='w-[1.15rem] absolute bottom-[5px] right-1 ' />
                            
                        </div>
                        <button className='py-[2px] px-[7px] text-sm bg-[#fa724a]
                         rounded hoverbtn'>  سوال جدید+</button>
                </div>
            </div>
        </nav>
    </>
  )
}
