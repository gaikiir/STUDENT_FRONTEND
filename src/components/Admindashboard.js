"use client";
import { Card, Avatar, Button } from "flowbite-react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { useState } from "react";
export default function Component() {
    const [records,setRecords] = useState({
        FirstName : "",
        LastName:"",
        Gender: ""
    });
    const navigate = useHistory();
    const LoadUpdate = (user_id) => {
        navigate.push('/studentupdate'+user_id);
    }

    return (
        <>
            <div className='bg-slate-700 h-screen py-3'>
                <div className='max-w-7xl mx-auto admin-content'>
                    <h1 className="text-left text-white text-2xl uppercase mb-3">dashboard</h1>
                    <div className="grid grid-cols-1 gap-x-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-3 bg-slate-400 p-3 rounded">
                        <Card className="max-h-screen card">

                            <div>
                                <img className="max-w-12 block float-left" src="/images/user.png"alt="user"/>
                                <h5 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">
                                    Total Users
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-2xl">
                                    {+4}
                                </p>
                            </div>

                        </Card>
                        <Card >

                            <div className="font-bold text-center">
                                <img className="max-w-12 text-center float-left" src="/images/docs.png" alt="documents" />
                                <h5 className="text-sm font-bold mb-2 text-gray-900 dark:text-white">
                                    Total Records
                                </h5>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-2xl">
                                    {+15}
                                </p>
                            </div>
                        </Card>
                        <Card>
                            <div >
                               <Link to="/addStudent" className="flex items-center ">
                                    <img className="max-w-12 float-left " src="/images/add-friend.png" alt="add-friend" />
                                    <button className="block ml-5 bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded mr-3 mt-2">Add Student</button>
                               </Link>
                            </div>
                            
                        </Card>
                       
                    </div>

                    <div className=" grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-2 sm:grid-cols-1 gap-y-3 mt-5">
                        <Card className="max-h-screen card p-y-3">
                            <div className="flex flex-col items-center text-start">
                                {/* Profile Picture */}
                                <div className="relative mb-4">
                                    <img
                                        src="/images/user.png"
                                        alt="Profile"
                                        className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                                    />
                                    <span className=" absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-1">
                                        
                                    </span>
                                </div>

                                {/* User Info */}
                                <div className="w-full space-y-4">
                                    {/* Name */}
                                    <div className="flex items-center">
                                        {/* <span className="material-icons text-gray-500 mr-2">person</span> */}
                                        <div>
                                            <p className="text-sm text-gray-500">Name</p>
                                            {/* <p className="font-medium">{user.displayName || 'John Doe'}</p> */}
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center">
                                        {/* <span className="material-icons text-gray-500 mr-2">email</span> */}
                                        <div>
                                            <p className="text-sm text-gray-500">Email</p>
                                            {/* <p className="font-medium">{user.email || 'user@example.com'}</p> */}
                                        </div>
                                    </div>

                                    {/* Gender */}
                                    <div className="flex items-center">
                                        <span className="material-icons text-gray-500">
                                            {/* {user.gender === 'female' ? 'female' : 'male'} */}
                                        </span>
                                        <div>
                                            <p className="text-sm text-gray-500">Gender</p>
                                            <p className="font-medium">
                                                {/* {user.gender ?
                                                    user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
                                                    : 'Not specified'} */}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <Link to="/createEvent">
                                            <Button className="bg-blue-500 hover:bg-blue-700 uppercase text-white font-bold px-2 mt-4"> create an event</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="max-h-screen card overflow-y-scroll max-h-96 relative">

                            <div className="overflow-x-hidden absolute top-0 left-0 right-0 w-full ">
                                <Table striped>
                                    <TableHead>
                                        <TableRow >
                                            <TableHeadCell>First name</TableHeadCell>
                                            <TableHeadCell>Last Name</TableHeadCell>
                                            <TableHeadCell>Gender</TableHeadCell>
                                            <TableHeadCell>Update</TableHeadCell>
                                            <TableHeadCell>Delete Student</TableHeadCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {/* {users.map((user) => ( */}
                                        <TableRow >
                                           {/* {records.map((r,i)=>(
                                               <div key={i}>
                                                <TableCell>{r.FirstName}</TableCell>
                                                <TableCell>{r.LastName}</TableCell>
                                                <TableCell>{r.Gender}</TableCell>
                                                <TableCell>
                                                    <Link to="/studentupdate" onClick={(e)=>{e.preventDefault(); LoadUpdate(r._id)}}>
                                                           Edit
                                                    </Link>
                                                   
                                                </TableCell>
                                                   <TableCell>
                                                       <Link to="/studentupdate" onClick={(e) => { e.preventDefault(); LoadUpdate(r._id) }}>
                                                           Delete
                                                       </Link>

                                                   </TableCell>
                                            </div>
                                           ))} */}
                                        </TableRow>
                                       
                                    </TableBody>
                                   
                                </Table>
                            </div>
                   
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}
