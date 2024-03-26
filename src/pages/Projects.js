import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import profilePicture from "../assets/propic2.jpg"; // Removed extra slash
import { Helmet } from "react-helmet";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "../styles/Projects.css";

function Projects() {
  return (
    <div>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> {/* CamelCase crossOrigin and added anonymous value */}
        <link href="https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="projects">
        <h1 className="h1moving">My Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, idx) => (
            <ProjectItem key={idx} id={idx} name={project.name} image={project.image} skills={project.skills} link={project.link} /> // Added key prop
          ))}
        </div>
      </div>
      <div>
        <p className="p">To See More Projects Click On My GitHub Profile!</p>
        <div className="arrow">
          <ArrowDownwardIcon />
        </div>
        <a className="github-link" href="https://github.com/ibrahimkedir10" target="_blank" rel="noopener noreferrer">
          <img src={profilePicture} alt="Profile" className="profile-image" /> {/* Removed href */}
        </a>
      </div>
    </div>
  );
}

export default Projects;
