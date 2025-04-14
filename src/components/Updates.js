import axios from "axios";
import { useParams } from "react-router-dom";
import { Button, Select, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Component = () => {
  return (
    <div className="form-hero">
      <h5 className="mb-5 text-center text-2xl font-bold uppercase">
        Update Student
      </h5>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">First Name</Label>
          </div>
          <TextInput
            id="email1"
            name="FirstName"
            type="text"
            placeholder="John"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Last Name</Label>
          </div>
          <TextInput
            id="password1"
            name="LastName"
            placeholder="Doe"
            type="text"
            required
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="countries">Select your Gender</Label>
        </div>
        <Select id="countries" name="Gender" required>
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
