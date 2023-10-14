"use client"
import React, {useState} from 'react';
import { HiDotsHorizontal } from "react-icons/hi";
import UploadImage from './UploadImage';

const onclickinput = () => {
  // <input type="text" className=' bg-yellow-600 text-[15px]' placeholder='explain what people can see' />
  window.alert('Hi');
};
function Form() {

  const [curr, next] = useState("Add Alt Text");

  function altText() {
    next(curr === "Add Alt Text" ? " " : "Add Alt Text") // curr === "Add Alt Text" ? "Unpublish" : "Add Alt Text"
  }

  return (
    <div className='bg-white p-14 rounded-2xl max-w-[60vw] min-w-[65vw]'>
        <div className='flex flex-row justify-between'>
            <button className='flex items-center text-gray-500 text-[1.4rem]'><HiDotsHorizontal/></button>
            <div className='flex justify-end gap-6'>
                <button>Board</button>
                <button className=' bg-red-600 text-white p-3 py-2 rounded-xl'>Publish</button>
            </div>
        </div>
        <div className='flex flex-row pt-5'>
          <div className=' pt-0 w-[38%]'>
            <UploadImage/>
          </div>
          <div className='p-3 pl-8 flex flex-col gap-y-5'>
            <input type="text" className='bg-white text-[35px] font-semibold font-sans w-full border-b-[1px] border-gray-400' placeholder='Add your title'/>
            <input type="text" className=' bg-white text-[15px] w-full border-b-[1px] border-gray-400' placeholder='Tell everyone what your pin is about'/>
            {curr==="Add Alt Text" ? <button className=' bg-[rgb(233,233,233)] p-3 rounded-full w-fit' onClick={altText}>{curr}</button> : <input type="text" className='bg-white text-[15px] w-full border-b-[1px] border-gray-400' placeholder='Explain what people can see in this pin'/>}
            <input type="text" className=' bg-white w-full text-[15px] mt-[70%] border-b-[1px] border-gray-400' placeholder='Add a destination link'/>
            <input type="text" className=' bg-white text-[15px]' placeholder='date' />
          </div>
        </div>
    </div>
  )
}

export default Form