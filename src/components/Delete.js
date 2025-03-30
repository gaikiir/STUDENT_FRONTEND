import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import 'react-toastify/dist/ReactToastify.css';
const deletestudent = () => {
  async function Deletestudent(student_id) {
    try {
      const token = sessionStorage.getItem("accessToke");
      await axios
        .delete(
          `http://localhost:4000/limit/routes/updateStudent/${student_id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          toast.success("student deleted successfully", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
        });
    } catch (error) {
      toast.error("An error Occurred while deleting student", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    }
  }
  return (
    <>
      <div className="form-hero">
        <form className="flex max-w-md flex-col gap-4" onClick={Deletestudent}>
        <Button type="submit">Delete</Button>
      </form>
      <ToastContainer/>
      </div>
    </>
  );
};

export default deletestudent;
