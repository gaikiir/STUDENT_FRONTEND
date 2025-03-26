
"use client";

import { Avatar, Button, Drawer, Label, TextInput,Select } from "flowbite-react";
import { useState } from "react";

import { Card } from "flowbite-react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import axios from "axios";
export default function Component() {
    const [isOpen, setIsOpen] = useState(false);
    const [data,setData] = useState({
        firstName :"",
        lastName:"",
        gender:""
    })

    //handel change state for a user 
    const handlechange =(e)=>{
        const {name,value} = e.target;
        setData((prev)=>{
            return{...prev,[name]:value};
        })
    }

    //handle the submit button when user click to submit
    const handleSubmit =(e)=>{
        e.preventDefault();
        //send the data to the user
        axios.get(`http://localhost:4000/students`,data)
        .then((res)=>{
            console.log("data received successfully");
        })
        .catch((err)=>{
            alert("Failed to receive data");
        })
    }
    const handleClose = () => setIsOpen(false);
    const navigate = useHistory();
    
    //handle create events 
    const handleCreateEvents =()=>{
        navigate.push('/assign');
    }


    return (
        <>

            <Card className="sm:max-w-auto">
                <div className="flex items-center justify-center">
                    <Button onClick={() => setIsOpen(true)}>Perform Tasks</Button>
                </div>
                <Drawer open={isOpen} onClose={handleClose}>
                    <Drawer.Header title="NEW EVENT" />
                    <Drawer.Items>
                        <div>
                            <div className="mb-6 mt-3">
                                <Label htmlFor="title" className="mb-2 block">
                                    Add student
                                </Label>

                            </div>

                            <form onChange={handleSubmit}>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1" className="label" value="First Name" />

                                    <TextInput id="email1"onChange={handlechange} name="firstName" type="input" placeholder="Enter First Name" required />
                                </div>
                                <div className="mb-2 block">
                                    <Label htmlFor="email1"className="label" value="Last Name" />
                                    <TextInput id="email1" onChange={handlechange} name='lastName' type="input" placeholder="Enter last Name" required />
                                </div>

                                <div className="mb-2 block">
                                    <Select id="countries"onChange={handlechange} name='gender' required>
                                        <option>--Gender--</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        
                                    </Select>
                                </div>

                                <div className="my-6">
                                    <Button size="sm" className="[&>span]:items-center [&>span]:px-5 [&>span]:py-3 w-full" type="submit">

                                        Add
                                    </Button>
                                </div>
                            </form>
                            {/* <Avatar.Group className="mb-6">
                                <Avatar rounded size="sm" stacked />
                                <Avatar  rounded size="sm" stacked />
                                <Avatar rounded size="sm" stacked />
                                <Avatar  rounded size="sm" stacked />
                            </Avatar.Group> */}

                            <Button className="w-full" onClick={handleCreateEvents}>

                                Create event
                            </Button>
                        </div>
                    </Drawer.Items>
                </Drawer>
            </Card>

        </>
    );
}
