import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const Education = () => {
  return (
    <div id="root">
      <Navbar />
      <div className="Education_EducationDiv__4ma2T">
        <div className="Card_Card__1Tc-D Projects_eachProject__HaSwA Education_eachEducation__18uN5">
          <h2>B.Tech(CSE) (2019-2023)</h2>
          <p>CEC,Landran</p>
          <h2>8.60 GPA</h2>
        </div>
        <div className="Card_Card__1Tc-D Projects_eachProject__HaSwA Education_eachEducation__18uN5">
          <h2>12th (2018-2019)</h2>
          <p>DAV School</p>
          <h2>89.2 %</h2>
        </div>
        <div className="Card_Card__1Tc-D Projects_eachProject__HaSwA Education_eachEducation__18uN5">
          <h2>10th (2016-2017)</h2>
          <p>DAV School</p>
          <h2>93.1%</h2>
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

export default Education;
