import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Admindashboard from './components/Admindashboard'
import Login from './components/Login';
import Register from './components/Register';
import Assignment from './components/Assignment';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'><Home/></Route>
            <Route path='/dashboard'><Admindashboard/></Route>
            <Route path='/register'><Register/></Route>
            <Router path='/assign'><Assignment/></Router>
            <Route path='/login'><Login/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
