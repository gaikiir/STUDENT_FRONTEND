import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "flowbite-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { useEffect, useState } from "react";
import axios from "axios";

const DashboardAd = () => {
  const [datas, setDatas] = useState([]);
  const [Unauthorized, setUnauthorized] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    axios
      .get(`http://localhost:4000/limit/routes/Allstudents`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setDatas(res.data);
        setUnauthorized(true);
      })
      .catch((err) => {
        console.log("an error occurred while displaying students");
      });
  }, []);
  return (
    <div className="dash max-w-5xl mx-auto p-2">
      <ul className="features grid grid-cols-1 gap-4 lg:grid-cols-4 mt-4">
        <li>
          <Link to="/addstudent" className="block">
            <Button className="bg-green-500 hover:bg-green-600 w-full uppercase">
              addstudent
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/createEvent" className="block">
            <Button className="bg-blue-500 hover:bg-blue-600 w-full uppercase">
              create-Event
            </Button>
          </Link>
        </li>
        <li>
          <Link to="addstudent" className="block">
            <Button className="bg-slate-500 hover:bg-slate-600 w-full uppercase">
              view Report
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/announcement" className="block">
            <Button className="bg-green-500 hover:bg-green-600 w-full uppercase">
              Publish your news
            </Button>
          </Link>
        </li>
      </ul>
      <div className="student-list">
        <h4 className="text-left my-3 text-2xl font-bold uppercase">
          student List
        </h4>
        <div className="studentlist">
          <div className="overflow-x-auto">
            <Table striped>
              <TableHead>
                <TableHeadCell>First Name</TableHeadCell>
                <TableHeadCell>Last Name</TableHeadCell>
                <TableHeadCell>Gender</TableHeadCell>
                <TableHeadCell>Update</TableHeadCell>
                <TableHeadCell>Delete</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y ">
                {datas.map((d, i) => (
                  <TableRow
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={i}
                  >
                    <TableCell>{d.FirstName}</TableCell>
                    <TableCell>{d.LastName}</TableCell>
                    <TableCell>{d.Gender}</TableCell>
                    <TableCell>
                      <a
                        href="/"
                        className="font-medium 
                        text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Edit
                      </a>
                    </TableCell>
                    <TableCell>
                      <a
                        href="/"
                        className="font-medium 
                        text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Delete
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAd;
