"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { HiSearch, HiBell, HiChat, HiChevronDown } from "react-icons/hi";
import { useSession, signIn, signOut} from "next-auth/react";
import { useRouter } from 'next/navigation';
import { Session } from "inspector";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import app from './../Shared/firebaseConfig';

function Header() {
    const { data: session } = useSession();
    // Initialize cloud firestore
    const db = getFirestore(app);
    const saveUserInfo = async() => {
        if(session?.user){
            await setDoc(doc(db, "user", session.user.email!), {
                userName: session.user.name,
                email: session.user.email,
                userImage: session.user.image
            });
        }
    }

    useEffect(() => {
        saveUserInfo();
    },[session])

    const router = useRouter();

    console.log(session);
    return (
        <div className="flex gap-3 sm:gap-2 items-center p-3.5 text-[14px]">
            <Image src='/logo.png' alt='logo' width={47} height={47}
            className='hover:bg-gray-300 p-2 rounded-full cursor-pointer' />
            <button className="bg-black text-white p-2 px-4 rounded-full hidden sm:block">Home</button>
            <button className="font-semibold p-2 px-4 rounded-full">Create</button>
            <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden sm:flex">
                <HiSearch className='text-[23px] text-gray-500'/>
                <input type="text" placeholder="Search" className="rounded-full px-2 py-1x bg-transparent outline-none w-full"/>
            </div>
            <HiSearch className='text-[30px] text-gray-500 cursor-pointer sm:hidden'/>
            <HiBell className="text-[30px] cursor-pointer sm:text-[45px] text-gray-500"/>
            <HiChat className="text-[30px] cursor-pointer sm:text-[45px] text-gray-500"/>
            {session?.user? <Image src={session.user.image!} onClick={()=>router.push('/'+ session.user?.email)}
            alt='user-image' width={47} height={47} className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'/>:
            <button className="font-semibold p-2 px-4 rounded-full" onClick={() => signIn()}>Login</button> }
            {/* <HiChevronDown className="text-[30px] text-gray-500"/> */}
        </div>
    )
}

export default Header