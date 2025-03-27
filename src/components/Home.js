
"use client";
import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import {  Button } from "flowbite-react";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Component() {
    return (
        <>
            <div className=" h-screen hero_header  relative bg-slate-700">
               
                <div className="max-w-7xl mx-auto header bg-green- absolute top-1/3 left-1/2 -translate-x-1/2 late-y-1/2">
                    <div className="text-center ">
                        <h1 className="text-4xl font-bold text-white ">IST Online Exam</h1>
                        <p className="text-lg text-white mt-3">Welcome to the IST Online Exam, the best online exam platform for students</p>
                        <div className="mt-5">
                            <Link to="/register " className="inline-block">
                                <Button className="bg-green-500 hover:bg-green-600">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <Footer  container  className="fixed bottom-0 bg-slate-800 text-white pt-12">
                    <div className="w-full text-center">
                        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between ">
                            <FooterBrand
                                href="https://flowbite.com"
                                src="https://flowbite.com/docs/images/logo.svg"
                                alt="Flowbite Logo"
                                name="Flowbite"
                            />
                            <FooterLinkGroup>
                                <FooterLink href="#">About</FooterLink>
                                <FooterLink href="#">Privacy Policy</FooterLink>
                                <FooterLink href="#">Licensing</FooterLink>
                                <FooterLink href="#">Contact</FooterLink>
                            </FooterLinkGroup>
                        </div>
                        <FooterDivider />
                        <FooterCopyright href="#" by="Flowbite™" year={2022} />
                    </div>
                </Footer>
            </div>

        </>
    );
}

