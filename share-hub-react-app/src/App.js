import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Importing all the components here
import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {Container} from 'react-bootstrap';
import NavBar from './components/Navbar';
import Items from './components/Items';
import ShareItem from './components/ShareItem';
import Signup from './components/Signup';
import Login from './components/Login';
import Logout from './components/Logout';
import NotFound from "./components/NotFound";


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
      <Switch>
        <Route path="/not-found" component={NotFound}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/logout" exact component={Logout}></Route>
        <Route path="/share" exact component={ShareItem}></Route>
        <Route path="/" exact component={Items}></Route>
        <Redirect to="/not-found" />
      </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
