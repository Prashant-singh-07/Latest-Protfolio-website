import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="Home_HomeDiv__mnITF">
        <img
          src={require("../USER-IMG.jpg")}
          alt="profile pic"
          loading="lazy"
        />
        <div>
          <h2 className="Home_fadeInfirst__fjpaZ">Hello there!</h2>
          <span className="Home_fadeInfirst__fjpaZ">
            <h2>I'm</h2>
            <h1>Prashant Singh</h1>
          </span>
          <h2 className="Home_fadeInSecond__TXiQZ">
            I'm a Javascript enthusiast and I love working with the Web
          </h2>
          <h2 className="Home_fadeInThird__Bodq1">
            Former SWE Intern - NI System(National Instruments)
          </h2>
          <section>
            <NavLink to="/project" className="Home_LinksSection__RqlaT a-dost">
              Checkout Projects
            </NavLink>
            <NavLink
              to="https://drive.google.com/file/d/1mWiBxSeL8xhTedESX-mM_5HiO8h5qtFK/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="Home_LinksSection__RqlaT a-dost"
            >
              View Resume
            </NavLink>
          </section>
        </div>
      </div>
      <footer>
        <div className="Footer_eachContact__HMVxq">
          <NavLink
            to="https://www.linkedin.com/in/prashant-singh-3912031b8/"
            target="_blank"
            rel="noreferrer"
            className="a-dost"
          >
            <img
              src={require("./linkedin-logo.JPG")}
              alt="linkedIn logo"
              className="Footer_linkedInImage__9VBmI"
            />
          </NavLink>
        </div>
        <div className="Footer_eachContact__HMVxq">
          <NavLink
            to="https://github.com/Prashant-singh-07"
            target="_blank"
            rel="noreferrer"
            className="a-dost"
          >
            {" "}
            <img
              src={require("./github_logo.jpg")}
              alt="github logo"
              className="Footer_githubImage__w6pKn"
            />
          </NavLink>
        </div>
        <div className="Footer_eachContact__HMVxq">
          <NavLink to="mailto:7prashantkumarsingh@gmail.com" className="a-dost">
            <img
              alt="gmail logo"
              src={require("./gmail-logo.JPG")}
              className="Footer_emailImage__WSrcV"
            />
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Home;
