import axios from "axios";
import { Button, Label, TextInput, Select } from "flowbite-react";
import { useState } from "react";

const Addstudentcompo = () => {
  const [infor, setInfor] = useState({
    FirstName: "",
    LastName: "",
    Gender: "",
  });
  const handlechange = (evn) => {
    const { name, value } = evn.target;
    setInfor((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubChange = (evn) => {
    evn.preventDefault();
    const token = sessionStorage.getItem("accessToken");
    axios
      .post(`http://localhost:4000/limit/routes/addstudent`, infor, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("student add successfully");
      })
      .catch((err) => {
        console.log("an error occurred while add student");
      });
  };
  return (
    <div className="form">
      <h4 className="text-2xl capitalize mb-2">Add student</h4>
      <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubChange}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="FirstName">First Name</Label>
          </div>
          <TextInput
            id="FirstName"
            onChange={handlechange}
            type="FirstName"
            placeholder="John"
            name="FirstName"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="lastName">Last Name</Label>
          </div>
          <TextInput
            id="lastName"
            type="text"
            name="LastName"
            placeholder="Doe"
            onChange={handlechange}
            required
          />
        </div>
        <div className="my-2">
          <Select id="countries" onChange={handlechange} name="Gender" required>
            <option>------Select your Gender----</option>
            <option>Male</option>
            <option>Female</option>
          </Select>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Addstudentcompo;
