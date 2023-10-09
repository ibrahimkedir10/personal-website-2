import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import profilePicture from "../assets//propic2.jpg";
import GithubIcon from "@material-ui/icons/GitHub";
import { Helmet } from "react-helmet";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";


import "../styles/Projects.css";

function Projects() {
  return (
    <div>
      {/* Helmet for modifying head section */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="projects">
        <h1 className="h1moving"> My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => (
            <ProjectItem id={idx} name={project.name} image={project.image} skills={project.skills} link={project.link}/>
          ))}
        </div>
      </div>
      <div>
        <p className="p"> To See More Pojects Click On My GitHub Profile!
          
        </p>
        <div className="arrow">
            {<ArrowDownwardIcon />}
          </div>
        <a className="github-link" href="https://github.com/ibrahimkedir10" target="_blank" rel="noopener noreferrer">
          <img src={profilePicture} alt="Profile" className="profile-image" href="https://github.com/ibrahimkedir10" />
         
        </a>
        <div>
        </div>
      </div>


    </div>
  );
}

export default Projects;
