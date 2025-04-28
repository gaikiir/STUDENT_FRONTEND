import axios from "axios";
import { useEffect, useState } from "react";

const SubmCompo = () => {
  const [records, setRecords] = useState([]);
  const [Unauthorized, setUnauthorized] = useState(false);
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    axios
      .get(`http://localhost:4000/limit/assign/getAllAssign`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setRecords(res.data);
        setUnauthorized(true);
      })
      .catch((err) => console.log("an error occurred"));
  }, []);

  return (
    <section className="submsection">
      <div className="max-w-5xl mx-auto">
        {records.map((r, i) => (
          <ul key={i}>
                <li className="mb-3 bg-gray-900 p-2">{`${r.createEvents}`}</li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default SubmCompo;
