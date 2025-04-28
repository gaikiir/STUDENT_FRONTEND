import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button } from "flowbite-react";
const HomeCompo = () => {
  return (
    <div className="wrapper relative h-screen pt-24">
      <header className="header">
        <h1 className="heading-primary-main leading-2 text-2xl uppercase mb-4 font-bold underline">
          IST Online Exam
        </h1>
        <p className="heading-primary-sub text-xl mb-4 font-bold ">
          Welcome to the IST Online Exam, the best online exam platform for
          students
        </p>
        <Link to="/newlink" className="inline-block">
          <Button className="bg-green-500 hover:bg-green-600">
            Get Started
          </Button>
        </Link>
      </header>
    </div>
  );
};

export default HomeCompo;
