
"use client";
import Footer from './Footer'
import { Card, Button } from "flowbite-react";

export default function Component() {
    return (
        <>
            <div className="max-w-7xl mx-auto  hero  ">
                {/* Heading */}
                <h1 className="text-3xl font-semibold tracking-tight uppercase text-gray-900 dark:text-white mb-8">
                    Welcome to IST Online Exam
                </h1>

                {/* Card Container */}
                <div className="flex flex-col items-center justify-center space-y-6 shrink-1 sm:flex sm:flex-row sm:space-y-0 sm:space-x-6">
                    {/* Card 1 */}
                    <Card className="max-w-sm flex-1">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy Technology Acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <Button>
                            Read more
                            <svg
                                className="-mr-1 ml-2 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </Card>

                    {/* Card 2 */}
                    <Card className="max-w-sm flex-1">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Noteworthy Technology Acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <Button>
                            Read more
                            <svg
                                className="-mr-1 ml-2 h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Button>
                    </Card>
                </div>
            </div>
            <Footer />
        </>
    );
}
