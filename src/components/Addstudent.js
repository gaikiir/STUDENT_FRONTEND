import axios from "axios";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css';

const  Component=()=>{

    const [data,setData] = useState({
        FirstName:'',
        LastName:'',
        Gender:''
    })

    //handler for the user input data when user enter their credetial info 
    const handleUserInfo =(ev)=>{
        const {name,value} =  ev.target;
        //set user data info
        setData((prev)=>{
            //return the data object from the user input
            return {...prev,[name]:value};
        })
        // const {name,value} = ev.target;
        // setData((prev)=>{
        //     return{...prev,[name]:value};
        // });
    }

    //handle the submit user data info
    const handleUserSubmit =(ev)=>{
        //preventing the form default behaviour
        ev.preventDefault();
        //saving user data info  to the database 
        const token = sessionStorage.getItem('accessToken');
        axios.post(`http://localhost:4000/limit/routes/addstudent`,data,{
            headers:{
                'Authorization':`Bearer ${token}`,
                'Content-Type':'application/json'
            }
        })
       .then((res)=>{
          toast.success('student added successfull',{
            position:toast.POSITION.TOP_RIGHT,
            autoClose:3000
          })
       })
       .catch((error)=>{
        toast.error('An error Occurred while adding student',{
          position:toast.POSITION.TOP_RIGHT,
          autoClose:3000,
        })
       })
    }
  return (
    <div className="bg-slate-700 h-screen text-white">
      <div className="form-hero">
        <h5 className="mb-5 text-center text-2xl font-bold uppercase">Add student</h5>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleUserSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" className="text-white font-bold uppercase">First Name</Label>
            </div>
            <TextInput id="email1" type="text" onChange={handleUserInfo}  name="FirstName" placeholder="John" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" className="text-white font-bold uppercase">Last Name</Label>
            </div>
            <TextInput id="email1" type="text" onChange={handleUserInfo} name="LastName"   placeholder="Doe" required />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="countries" className="text-white font-bold uppercase">Select your Gender</Label>
            </div>
            <Select id="countries"onChange={handleUserInfo}  name="Gender"  required>
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </Select>
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
}
export default Component;
