import { Link } from "react-router-dom";

import React from 'react'
import { useEffect } from "react";
import { useState } from "react";

export default  function Userlist() {
    let [usertable,setusertable] = useState([])

    useEffect(async () => {
        let users =await fetch("https://6073fc33066e7e0017e78bc1.mockapi.io/userdata");
        let userData = await users.json();
        console.log(userData);
        setusertable([...userData])
    },[])

    return (
        <div>
            <h3>User List</h3>
            <button className="btn btn-light text-light"> <Link to="/usercreate"> Create User </Link></button>
                <div class="card-body">
                           {
                              usertable.length>0 ? <div class="table-responsive"> 
                            
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Salery($) </th>
                                            <th>Phone number</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            usertable.map((obj) => {
                                                return(
                                             <tr>
                                                <td>{obj.name}</td>
                                                <td>{obj.position}</td>
                                                <td>{obj.office}</td>
                                                <td>{obj.age}</td>
                                                <td>{obj.salery}</td>      
                                                <td  > <Link to={`/useredit/${obj.id}`}> edit user </Link></td>
                                            </tr> 
                                                )
                                               
                                            })
                                        
                                        }
                                                                             
                                    </tbody>
                                </table>
                           
                            </div> :<>
                             <h3> Loading...</h3>
                             </>
                            }
                              
                        </div>
        </div>
    )
}


