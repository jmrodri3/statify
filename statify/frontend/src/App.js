import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom";
import Login from "./views/Login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">About</Link>
        </li>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
