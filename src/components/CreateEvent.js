import axios from "axios";
import { Label, Textarea, Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const CreateEventcomp = () => {
  const [events, setEvents] = useState({
    createEvent: "",
    title: "",
    author:""
  });
  const navigate = useHistory();
  const handleNavigate = ()=>{
    navigate.push('/dashboard');
    }
  const handleEventChange = (evn) => {
    const { name, value } = evn.target;
    setEvents((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubEvent = (evn) => {
    evn.preventDefault();
    const token = sessionStorage.getItem("accessToken");
    axios
      .post(`http://localhost:4000/limit/assign/addAssign`, events, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("event created successfully");
      })
      .catch((err) => {
        console.log("an error occurred while create event");
      });
  };
  return (
    <div className="bg-slate-800 h-screen">
      <form onSubmit={handleSubEvent}>
        <div className="max-w-lg mx-auto form-assign">
          <div className="mb-3 block ">
            <Label htmlFor="comment" className="text-2xl font-bold">
              Create Your Event here
            </Label>
          </div>
          <div className="mb-3 text-left">
            <Label htmlFor="comment" className="text-2xl font-bold mb-2">
              Author
            </Label>
            <TextInput
              id="author"
              type="text"
              placeholder="your name"
              required
              shadow
              name="author"
              onChange={handleEventChange}
            />
          </div>
          <div className="mb-3 text-left">
            <Label htmlFor="comment" className="text-2xl font-bold mb-2">
              Title
            </Label>
            <TextInput
              id="title"
              type="text"
              placeholder="Title"
              required
              shadow
              name="title"
              onChange={handleEventChange}
            />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            name="createEvents"
            onChange={handleEventChange}
            rows={6}
          />
          <Button type="submit" className="w-full mt-4">
            Publish Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEventcomp;
