import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import Login from "./views/Login";
import './App.css';

function App() {
  require('dotenv').config();

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/dashboard">
            <h1>Dashboard</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
