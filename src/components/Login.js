
"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Logincompo(){
    return(
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
                        <TextInput id="password2" type="password" required shadow />
                    </div>

                    <div className="flex items-center gap-2">
                      
                        <Label htmlFor="agree" className="flex">
                            Forgotten &nbsp;
                            <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                password?
                            </Link>
                        </Label>
                    </div>
                    <Button type="submit">Login</Button>
                    <p>
                        You don not  have an account? <Link to="/register" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </>
    )
}

