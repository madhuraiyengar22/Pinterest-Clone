"use client"
import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import UserInfo from "../components/UserInfo";

function Profile({params}:{params: any}) {
    const db = getFirestore(app);
    const [userInfo,setUserInfo] = useState<any[]>();
    useEffect(() => {
        console.log(params.userId.replace('%40','@'));
        if(params){
            getUserInfo(params.userId.replace('%40','@'));
        }
    },[params]);

    const getUserInfo = async(email: string) => {
        const docRef = doc(db, "user", email);
        const docSnap:any = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setUserInfo(docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }   
    }

    return (
        <div>
            {
                userInfo?
                <UserInfo userInfo = {userInfo}/> : null
            }
        </div>
    )
}

export default Profile