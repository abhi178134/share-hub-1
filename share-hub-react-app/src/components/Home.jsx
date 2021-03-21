import React from "react";
import { Link } from "react-router-dom";
import web from "../images/volunteer.svg";
import Footer from "./Footer";

const Home = () => {
  return (
    <section id="#header" className="home">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
            <h1>
              Feel Organized without the Effort with{" "}
              <strong className="bn">Share Hub..</strong>{" "}
            </h1>
            <h4>
                ShareHub helps you capture and priortize ideas and to-do lists so nothing falls through the cracks.
            </h4>
            <div className="my-3">
              <Link to="/stuffs">
                <button className="btn btn-primary get-started mb-5">
                  Go to shared stuffs
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={web} className="img-fluid animated" alt="homeimg" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
