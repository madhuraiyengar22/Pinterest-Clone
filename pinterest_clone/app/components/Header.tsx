import React from "react";
import Image from "next/image";

function Header() {
    return (
        <div>
            <Image src='/logo.png' alt='logo' width={50} height={50}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
        </div>
    )
}

export default Header