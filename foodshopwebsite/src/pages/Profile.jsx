import React from 'react';
import { useState,useEffect } from 'react';
const Profile = () => {
    const [userData,setUserData] = useState({})
    useEffect(() => {
        const getUserFromLocal = JSON.parse(localStorage.getItem('user'));
        setUserData(getUserFromLocal);
    })
    

    return (
        <div>
            
        </div>
    );
};

export default Profile;