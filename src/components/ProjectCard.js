import React from "react";
import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, description, imgUrl, github }) => {
  return (
    <Col sm={6} md={4} className="project-card">
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-hover">
          <h5>{title}</h5>
          <p>{description}</p>
          <a href={github} target="_blank" rel="noopener noreferrer" className="github-btn">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </Col>
  );
};
