import React from 'react';
import { useState } from 'react';

let UserContext =React.createContext();

export default UserContext;


export const UserProvider =({children}) => {

    let [userList,setuserList] = useState([])

    return(
        <UserContext.Provider value={{userList,setuserList}}>
        {children}
    </UserContext.Provider>
    )
    
   
}