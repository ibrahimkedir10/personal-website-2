import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import profilePicture from "../assets//propicremovebg.png";

function Home() {
  return (
    <div className="wrapper">
      <div className="about">
        <h2> Ibrahim Kedir</h2>
        <img src={profilePicture} alt="Ibrahim Kedir" className="profile-picture" />
        <div className="prompt">
          <p className="cursive">A software developer with a passion for learning and creating.</p>
            {/* LinkedIn Icon with a link */}
            <a href="https://www.linkedin.com/in/ibrahim-kedir/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          {/* Email Icon with a mailto link */}
          <a href="mailto:ibrahim.kedir@outlook.com">
            <EmailIcon />
          </a>
          
          {/* GitHub Icon with a link */}
          <a href="https://github.com/ibrahimkedir10" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Programing Languages:</h2>
            <span>
            JavaScript, C#, HTML, CSS, SQL
            </span>
          </li>
          <li className="item">
            <h2>Frameworks and Libraries:</h2>
            <span>
             .Net, React, Vue.js, JSON, Linux.
            </span>
          </li>
          <li className="item">
            <h2>Databases:</h2>
            <span>
             SQL server, Azure, MongoDB, MealDB.
              </span>
          </li>
        </ol>
      </div>
    </div>
    
      
  );
}

export default Home;
