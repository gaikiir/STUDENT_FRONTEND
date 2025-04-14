
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default function Component() {
  
  const navigate = useHistory()
    //handle dashboard loadings when user clicks on
   const handledashboard =()=>{
    navigate.push('/dashboard');
   }
    
    return (
        <Navbar className="bg-slate-800 text-slate-100 fixed left-0 top-0 right-0 z-50">
            <Navbar.Brand href="/">
                <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">IST Online exams</span>
            </Navbar.Brand>
            <div className="flex md:order-3">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item onClick={handledashboard}>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Edit profile</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Navbar.Link className="text-base text-slate-50" href="/" active>
                    Home
                </Navbar.Link>
                <Navbar.Link className="text-base text-slate-50" href="/News">News</Navbar.Link>
                <Navbar.Link className="text-base text-slate-50" href="/update">sevices</Navbar.Link>
                <Navbar.Link className="text-base text-slate-50" href="/studentdash">Blog</Navbar.Link>
                <Navbar.Link className="text-base text-slate-50" href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
