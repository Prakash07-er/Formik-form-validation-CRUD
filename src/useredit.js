import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router'

export default  function Useredit(props) {
    console.log(props)
    let history = useHistory();
    let [name ,setname] =useState("")
    let [office ,setoffice] =useState("")
    let [position ,setposition] =useState("")
    let [age ,setage] =useState("")
    let [salery ,setsalery] =useState("")


    useEffect (async () => {
        let edit = await fetch(`https://6073fc33066e7e0017e78bc1.mockapi.io/userdata/${props.match.params.id}`)
        let editdata = await edit.json();
        console.log(editdata);

        setname(editdata.name)
        setoffice(editdata.office)
        setposition(editdata.position)
        setage(editdata.age)
        setsalery(editdata.salery)
    },[])

    let remove = async () =>{
        await fetch(`https://6073fc33066e7e0017e78bc1.mockapi.io/userdata/${props.match.params.id}`, {
          method: "DELETE",
        });
        history.push("/user");
      }
      let cancel =  () =>{
       
        history.push("/users");
      }

      let initialValues = {
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
        let name = values.name;
        let position = values.position;
        let office = values.office;
        let age = values.age;
        let salery = values.salery;
            await fetch(`https://6073fc33066e7e0017e78bc1.mockapi.io/userdata/${props.match.params.id}`,{
                method: "PUT",
                body: JSON.stringify({
                    name,
                    position,
                    office,
                    age,
                    salery
                }),
                headers: {
                    "Content-type": "application/json",
                  }
            });
            history.push("/users");
            }
        

    let formik = useFormik({
        initialValues,
        validate,
        onSubmit
    })
    // console.log("Form Values", formik.values);
    // console.log("Form errors", formik.errors);

    return (
        <div>

            <h1> User Edit  {props.match.params.id} </h1>
        <form onSubmit={formik.handleSubmit}>

            <div class="container rounded bg-white mt-5 mb-5">
                
        <div class="col-md-12 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">User Panel</h4>
                </div>
                    <div class="col-md-12">
                    <label class="labels">Name</label>
                    <input type="text" class="form-control"
                    id="name"
                    name="name" 
                     placeholder="first name"
                      value={formik.values.name=name}
                       onChange={(e)=>setname(e.target.value)} />
                          {formik.errors.name   ? <div className="error">{formik.errors.name}</div> :null}
                       </div>
                <label class="labels">Position</label>
                    <input type="text" class="form-control" 
                    id="position"
                    position="position"
                    placeholder="enter position"  
                    value={formik.values.position=position}
                     onChange={(e)=>setposition(e.target.value)} />
                          {formik.errors.position  ? <div className="error">{formik.errors.position}</div> :null}
                     </div>
                    <div class="col-md-12">
                    <label class="labels">Office</label>
                    <input type="text" class="form-control"
                    id="office"
                    office="office"
                     placeholder="enter office name"  
                      value={formik.values.office=office}
                       onChange={(e)=>setoffice(e.target.value)}  />
                          {formik.errors.office ? <div className="error">{formik.errors.office}</div> :null}
                       </div>
                    <div class="col-md-12">
                    <label class="labels">Age</label>
                    <input type="text" class="form-control"
                        id="age"
                        age="age"
                        placeholder="enter age"
                        value={formik.values.age=age} 
                        onChange={(e)=>setage(e.target.value)} />
                        {formik.errors.age ? <div className="error">{formik.errors.age}</div> :null}
                      </div>
                   <div class="col-md-12">
                    <label class="labels">Salery</label>
                    <input type="text" class="form-control"
                        id="salery"
                        salery="salery"
                        placeholder="enter Salery" 
                        value={formik.values.salery=salery} 
                        onChange={(e)=>setsalery(e.target.value)} />
                          {formik.errors.salery  ? <div className="error">{formik.errors.salery}</div> :null}
                       </div>
                   
                <div className="row mt-3">
                    <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit"   > Update User</button></div>
                    <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={remove} >Delete user</button></div>
                    <div class="ml-4 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={cancel}>Cancel</button></div>
                </div>
        </div>
      
        </div>
        </form>
        </div>
    )
}


