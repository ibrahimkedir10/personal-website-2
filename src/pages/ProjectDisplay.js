import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img class="imgdisplay"src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      )}

    </div>
  );
}

export default ProjectDisplay;
