import { useState } from "react";
import auth from "../services/auth";

const Logout = () =>{
  const componentDidMount = () => {
    auth.logout();
    window.location = "/";
  }
  return null;
}

export default Logout;
