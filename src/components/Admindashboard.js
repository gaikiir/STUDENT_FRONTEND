import { Card } from "flowbite-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Button,
} from "flowbite-react";
import { Link } from "react-router-dom/cjs/react-router-dom";

export default function Admindashboard() {
  return (
    <section className="wrapper h-screen bg-slate-700">
      <div className=" max-w-6xl mx-auto ">
        <h5 className="text-white font-bold uppercase py-2">Dashboard</h5>
        <article className="p-2 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="view-reports"
              className="bg-sky-500 block text-white capitalize font-bold p-2"
            >
              view student reports
            </Link>

            <Link to="/addstudent" className="block ">
              <Button className="bg-blue-500 w-full Add New Student hover:bg-green-600">
                Add New Student
              </Button>
            </Link>
            <Link
              to="viewreports"
              className="bg-sky-500 p-2 inline-block text-white capitalize font-bold "
            >
              view events
            </Link>
            <Link to="/createEvent" className="block ">
              <Button className="bg-blue-800 w-full Add New Student hover:bg-green-600 capitalize">
                create an Event
              </Button>
            </Link>
          </div>
        </article>
        {/* student list display section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div className=" table-content mt-3">
            <Table striped>
              <TableHead>
                <TableHeadCell>First Name</TableHeadCell>
                <TableHeadCell>Last Name</TableHeadCell>
                <TableHeadCell>Gender</TableHeadCell>
                <TableHeadCell>Update</TableHeadCell>
                <TableHeadCell>Edit</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple MacBook Pro 17"
                  </TableCell>
                  <TableCell>Sliver</TableCell>
                  <TableCell>Laptop</TableCell>
                  <TableCell>$2999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </TableCell>
                  <TableCell>White</TableCell>
                  <TableCell>Laptop PC</TableCell>
                  <TableCell>$1999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                  </TableCell>
                  <TableCell>Black</TableCell>
                  <TableCell>Accessories</TableCell>
                  <TableCell>$99</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Google Pixel Phone
                  </TableCell>
                  <TableCell>Gray</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>$799</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple Watch 5
                  </TableCell>
                  <TableCell>Red</TableCell>
                  <TableCell>Wearables</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple Watch 5
                  </TableCell>
                  <TableCell>Red</TableCell>
                  <TableCell>Wearables</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple Watch 5
                  </TableCell>
                  <TableCell>Red</TableCell>
                  <TableCell>Wearables</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Apple Watch 5
                  </TableCell>
                  <TableCell>Red</TableCell>
                  <TableCell>Wearables</TableCell>
                  <TableCell>$999</TableCell>
                  <TableCell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          {/* admin cta section  */}
          <div className="cta-section ">
            <p className="font-normal text-slate-100 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
