
"use client";

import { Footer } from "flowbite-react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Component() {
    return (
        <Footer container className="fixed bottom-0 bg-slate-800 text-white pt-12">
           
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="https://flowbite.com"
                        src="https://flowbite.com/docs/images/logo.svg"
                        alt="Flowbite Logo"
                        name="Flowbite"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="/" by="By CHRIS" year={'Alright copy reserve: '+2025} />
            </div>
        </Footer>
    );
}
