import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Pet from "./pages/pet/Pet";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>
              Tech Pet
            </h1>
            <div>
              <ul>
                <li><NavLink to="/">Landing</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/pet">Pet</NavLink></li>
              </ul>
            </div>
          </header>
          <div className="content">
            <Route exact path="/" component={Landing}/>
            <Route path="/login" component={Login}/>
            <Route path="/pet" component={Pet}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
