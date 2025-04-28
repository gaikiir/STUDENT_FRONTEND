import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import DashboardAd from "./components/DashboardAdmin";
import Addstudent from './components/Addstudent'
import CreateEvent from './components/CreateEvent';
import Submit from "./components/Submit";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/newlink">
              <News />
            </Route>
            <Route path="/dashboard">
              <DashboardAd />
            </Route>
            <Route path="/addstudent">
              <Addstudent />
            </Route>
            <Route path="/createEvent">
              <CreateEvent />
            </Route>
            <Route path="/submit"><Submit/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
