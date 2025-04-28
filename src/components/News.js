import axios from "axios";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { useEffect, useState } from "react";

const NewsCompo = () => {
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
    <section className="hero ">
      <div className="max-w-5xl mx-auto ">
        <h1 className=" leading-4 font-bold uppercase text-left px-3 mb-3">
          News Update
        </h1>
        <hr />

        {/* contentn  */}
        <div className="mt-3">
          <Accordion>
            <AccordionPanel>
              {records.map((r, i) => (
                <div key={i}>
                  <AccordionTitle>{r.title}</AccordionTitle>
                  <AccordionContent>
                    <h4>Published By : {r.author}</h4>
                    <a
                      href="/submit"
                      className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Start &rarr;
                    </a>
                  </AccordionContent>
                </div>
              ))}
            </AccordionPanel>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default NewsCompo;
