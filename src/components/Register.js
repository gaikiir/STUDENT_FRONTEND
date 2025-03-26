
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Component() {
    return (
        <>
            <div className="form-hero">
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email2" value="Your email" />
                        </div>
                        <TextInput id="email2" type="email" placeholder="johndoe@gmail.com" required shadow />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password2" value="Your password" />
                        </div>
                        <TextInput id="password2" type="password" placeholder="Enter your password" required shadow />
                    </div>
                   
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree" required/>
                        <Label htmlFor="agree" className="flex">
                            I agree with the&nbsp;
                            <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                terms and conditions
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit">Register new account</Button>
                    <p>
                        Already have an account? <Link to="/login" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            login
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}
