import React from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat, HiChevronDown } from "react-icons/hi";

function Header() {
    return (
        <div className="flex gap-3 items-center p-3.5 text-[14px]">
            <Image src='/logo.png' alt='logo' width={47} height={47}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
            <button className="bg-black text-white p-2 px-4 rounded-full">Home</button>
            <button className="font-semibold p-2 px-4 rounded-full">Create</button>
            <div className="bg-[#e9e9e9] p-3 flex gap-3 items-center rounded-full w-full">
                <HiSearch className='text-[20px] text-gray-500'/>
                <input type="text" placeholder="Search" className="rounded-full px-2 py-1x bg-transparent outline-none w-full"/>
            </div>
            <button className="px-2.5"><HiBell className="text-[30px] text-gray-500"/></button>
            <button className="px-2.5"><HiChat className="text-[30px] text-gray-500"/></button>
            <Image src='/logo.png' alt='logo' width={47} height={47}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
            <HiChevronDown className="text-[30px] text-gray-500"/>
        </div>
    )
}

export default Header