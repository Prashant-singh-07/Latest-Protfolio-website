import React from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
const Contact = () => {
  return (
    <div id="root">
      <Navbar />
      <div className="Card_Card__1Tc-D Projects_Projects__rT9EO">
        <div className="Card_Card__1Tc-D Projects_eachProject__HaSwA">
          <h2 className="Projects_projectTitle__axq7K">Movix</h2>
          <div className="Card_Card__1Tc-D Projects_ProjectDescription__lZL3u">
            A movie information web based application built with React and
            styled with SCSS. The database(e.g:- rating,cast, poster etc.) for
            movies are obtained from the TMDB website using its API. The app has
            features to arrange the movies on basis of release date or
            popularity.App has also feature to shortlist the movies according to
            a specific Genres.
          </div>
          <div className="Projects_LinkAndGit__nbsX1">
            <div className="Card_Card__1Tc-D Projects_ProjectLink__C0YVk">
              <NavLink
                id="projectLinkId"
                to="https://prashant-singh-movix.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="a-dost"
              >
                Check Now
              </NavLink>
            </div>
            <div className="Card_Card__1Tc-D Projects_ProjectgGithubLink__VCWIZ">
              <NavLink
                to="https://github.com/Prashant-singh-07/Movix"
                target="_blank"
                rel="noreferrer"
                className="a-dost"
              >
                See Code
              </NavLink>
            </div>
          </div>
        </div>
        <div className="Card_Card__1Tc-D Projects_eachProject__HaSwA">
          <h2 className="Projects_projectTitle__axq7K">Tic Tac Toe</h2>
          <div className="Card_Card__1Tc-D Projects_ProjectDescription__lZL3u">
            Lets users play the Tic-Tac-Toe online. Also lets a player play
            against a Bot. The app is built with Vanilla JS and designed with
            CSS. The scores are recorded and stored in the localStorage of the
            browser
          </div>
          <div className="Projects_LinkAndGit__nbsX1">
            <div className="Card_Card__1Tc-D Projects_ProjectLink__C0YVk">
              <NavLink
                id="projectLinkId"
                to="https://github.com/Prashant-singh-07"
                target="_blank"
                rel="noreferrer"
                className="a-dost"
              >
                Play Now!
              </NavLink>
            </div>
            <div className="Card_Card__1Tc-D Projects_ProjectgGithubLink__VCWIZ">
              <NavLink
                to="https://github.com/Prashant-singh-07"
                target="_blank"
                rel="noreferrer"
                className="a-dost"
              >
                See Code
              </NavLink>
            </div>
          </div>
        </div>
        <div className="Card_Card__1Tc-D Projects_eachProject__HaSwA">
          <h2 className="Projects_projectTitle__axq7K">Weather App</h2>
          <div className="Card_Card__1Tc-D Projects_ProjectDescription__lZL3u">
            Gives an accurate weather description for a given location or the
            current location of the user. Built with Vanilla JS &amp; designed
            with CSS. The app gets the data from the openweathermap API using
            calls to fetch API.
          </div>
          <div className="Projects_LinkAndGit__nbsX1">
            <div className="Card_Card__1Tc-D Projects_ProjectLink__C0YVk">
              <NavLink
                id="projectLinkId"
                to="https://prashant-singh-weather.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="a-dost"
              >
                Check Now
              </NavLink>
            </div>
            <div className="Card_Card__1Tc-D Projects_ProjectgGithubLink__VCWIZ">
              <NavLink
                to="https://github.com/Prashant-singh-07/Weather_forecast"
                target="_blank"
                rel="noreferrer"
                className="a-dost"
              >
                See Code
              </NavLink>
            </div>
          </div>
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

export default Contact;
