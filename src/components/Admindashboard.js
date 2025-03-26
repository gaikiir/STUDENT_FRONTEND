"use client";
import StudentDetails from './StudentDetailts'
import { Card, Avatar } from "flowbite-react";
import Performtask from "./Performtask";
export default function Component() {
    return (
        <>
            <div className="hero">
                <h1 className="text-2xl font-semibold tracking-tight uppercase text-gray-900 dark:text-white mb-8 ">
                    Welcome welcome back Admin
                </h1>
                <div className="max-w-7xl mx-auto grid  grid-rows-2 gap-3 sm:grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-2">

                    <div className="">
                        <div className="mx-auto mb-2 flex items-center justify-center p-2 dark:bg-gray-600">
                            <Avatar rounded size="md" stacked />
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">Student Details</div>
                        <StudentDetails />
                    </div>

                    <div className="">
                        <div className="mx-auto mb-2 flex h-[48px] max-h-[48px] w-[48px] max-w-[48px] items-center justify-center rounded-full bg-gray-200 p-2 dark:bg-gray-600">
                            <svg
                                className="inline h-5 w-5 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 18"
                            >
                                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                        </div>
                        <div className="text-center font-medium text-gray-500 dark:text-gray-400">Users </div>
                        <Performtask />
                    </div>

                </div>
            </div>
        </>
    );
}
