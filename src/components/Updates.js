import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Component = () => {
  const {student_id}  = useParams();
console.log('Received url id', student_id)
  const [data, setData] = useState({
    FirstName: '',
    LastName: '',
    Gender: ''
  });

  useEffect(() => {
    //if (!student_id) return; // Guard clause

    const token = sessionStorage.getItem('accessToken'); // Fixed typo
  
    
    axios.get(`http://localhost:4000/limit/routes/getStudentById/${student_id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      setData({
        _id: res.data._id,
        FirstName: res.data.FirstName,
        LastName: res.data.LastName,
        Gender: res.data.Gender
      });
    })
    .catch((err) => console.error(err))
    .finally(() => {});
  }, [student_id]);

  const handleUpdate = (ev) => {
    const { name, value } = ev.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitUpdate = (ev) => {
    ev.preventDefault();
    const token = sessionStorage.getItem('accessToken');

    axios.put(`http://localhost:4000/limit/routes/updateStudent/${student_id}`, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      toast.success('Student updated successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
  
    })
    .catch(() => {
      toast.error('Update failed', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000
      });
   
    });
  };

  return (
    <div className="form-hero">
      <h5 className="mb-5 text-center text-2xl font-bold uppercase">Update Student</h5>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmitUpdate}>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">First Name</Label>
        </div>
        <TextInput id="email1" onChange={handleUpdate} name="FirstName" type="text" placeholder="John" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Last Name</Label>
        </div>
        <TextInput id="password1" onChange={handleUpdate} name="LastName" placeholder="Doe" type="text" required />
      </div>
     <div className="mb-2 block">
        <Label htmlFor="countries">Select your Gender</Label>
      </div>
      <Select id="countries" onChange={handleUpdate} name="Gender" required>
        <option>----Genders----</option>
        <option>Male</option>
        <option>Female</option>
        
      </Select>
      <Button type="submit">Update</Button>
    </form>
      <ToastContainer />
    </div>
  );
};

export default Component;