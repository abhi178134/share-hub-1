import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing all the components here
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {Container} from 'react-bootstrap';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
      <Switch>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" exact component={Home}></Route>
      </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
