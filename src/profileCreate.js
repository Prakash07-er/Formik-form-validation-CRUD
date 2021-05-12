import React from 'react'
// import { useContext } from 'react';
// import { useState } from 'react'
import { useHistory } from 'react-router';
import { useFormik } from 'formik';
// import ProfileContext from './profileContext';

export default  function Profilecreate() {
    let history = useHistory()

    // let profileData = useContext(ProfileContext)

    // let [name,setname] = useState("");
    // let [position,setposition] = useState("");
    // let [office,setoffice] = useState("");
    // let [age,setage] = useState("");
    // let [salery,setsalery] = useState("");

    let initialValues =  {
        name:"",
        position:"",
        office:"",
        age:"",
        salery:""
    }
    let validate =  (values) => {

        let errors ={}

        if (!values.name) {
            errors.name = "*Required";
          }
          if (!values.position) {
            errors.position = "*Required";
          }
          if (!values.office) {
            errors.office = "*Required";
          }
          
          if (!values.age) {
            errors.age = "*Required";
          }
          if (!values.salery){
              errors.salery="*Required"
          }
          
        return errors
    }

    let onSubmit =  async (values) => {
        // console.log("Form Values", formik.values);
        let name = values.name;
        let position = values.position;
        let office = values.office;
        let age = values.age;
        let salery = values.salery;
        await   fetch ("https://6073fc33066e7e0017e78bc1.mockapi.io/userdata",{
            method: "POST",
            body: JSON.stringify({
                name,
                position,
                office,
                age,
                salery
            }),
            headers: {
                "Content-type" : "application/json"
            }
        })
        history.push('/users')

    }

    let formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })
    // console.log("Form errors", formik.errors);

    let cancel =  () =>{
       
        history.push("/profile");
      } 

    return (
        <div className="container">
            <h1> Profile Create</h1>
            <div class="container rounded bg-white mt-5 mb-5">
            
            <form class="col-md-12 border-right" onSubmit={formik.handleSubmit}>
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="text-right">User Create</h4>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-6"><label class="labels" >Name</label>
                        <input type="text" class="form-control"
                         id="name"
                          name="name" 
                         placeholder="enter full name"
                         value={formik.values.name}  
                          onChange={formik.handleChange}/>
                          {formik.errors.name ? <div className="error">{formik.errors.name}</div> :null}
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-md-12"><label class="labels">Position</label>
                        <input type="text" class="form-control" 
                        id="position" placeholder="enter position" 
                        position="position"
                        value={formik.values.position} 
                        onChange={formik.handleChange} />
                          {formik.errors.position ? <div className="error">{formik.errors.position}</div> :null}

                        </div>

                        <div class="col-md-12"><label class="labels">Office</label>
                        <input type="text" class="form-control" 
                         id="office"
                         office="office"
                          placeholder="enter office name" 
                          value={formik.values.office} 
                          onChange={formik.handleChange} />
                          {formik.errors.office ? <div className="error">{formik.errors.office}</div> :null}
                          </div>

                        <div class="col-md-12"><label class="labels">Age</label>
                        <input type="text" class="form-control" 
                        id="age"
                        age="age"
                         placeholder="enter age"
                         value={formik.values.age} 
                         onChange={formik.handleChange} />
                          {formik.errors.age ? <div className="error">{formik.errors.age}</div> :null}
                         </div>
                        
                        <div class="col-md-12"><label class="labels">Salery</label>
                        <input type="text" class="form-control" 
                         id="salery"
                         salery="salery"
                          placeholder="enter salery" 
                        value={formik.values.salery}   
                        onChange={formik.handleChange} />
                          {formik.errors.salery ? <div className="error">{formik.errors.salery}</div> :null}
                        </div>
                    </div>
                    <div className="row mt-3">
                <div class=" text-center"><button class="btn btn-primary profile-button" type="submit" >Create Profile</button></div>
                   <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={cancel}>Cancel</button></div>
                   </div>
                </div>
            </form>
          
    </div>
    
        </div>
    )
}


