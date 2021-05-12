import React from 'react';
import { useState } from 'react';

let ProfileContext =React.createContext();

export default ProfileContext;


export const ProfileProvider =({children}) => {

    let [profileList,setprofileList] = useState([])

    return(
        <ProfileContext.Provider value={{profileList,setprofileList}}>
        {children}
    </ProfileContext.Provider>
    )
    
   
}