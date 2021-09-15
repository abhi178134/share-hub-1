import {logout} from "../services/auth";
import {auth} from '../firebase/config.js';

const Logout = () =>{
  auth.signOut();
  logout();
  window.location = "/";
  return null;
}

export default Logout;
