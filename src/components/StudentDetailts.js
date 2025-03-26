
"use client";

import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Component(url) {
    const [records,setRecords] = useState(null);
    useEffect(()=>{
        axios.get()
        .then((response)=>{
            setRecords(response.data)
        }).catch((error)=>{
            console.log('an error occurred while getting records');
        })
    })
    return (
        <div className="overflow-y">
            <Table>
                <Table.Head>
                    <Table.HeadCell>First Name</Table.HeadCell>
                    <Table.HeadCell>Last Name</Table.HeadCell>
                    <Table.HeadCell>Gender</Table.HeadCell>
                    <Table.HeadCell>Update</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        {/* {records.map((r,i)=>(
                            <div key={i}>
                            <Table.Cell>{r.firstName}</Table.Cell>
                            <Table.Cell>{r.lastName}</Table.Cell>
                            <Table.Cell>{r.gender}</Table.Cell>
                            </div>
                        ))} */}
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                       
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
}
