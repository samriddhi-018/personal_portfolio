import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import llm from "../assets/img/llm.jpg";
import Movie from "../assets/img/movie.jpg";
import mano from "../assets/img/mano.jpg";
import doc_app from "../assets/img/doc_app.jpg";
import multi from "../assets/img/multi.jpg";
import swasthya from "../assets/img/swasthya.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Mental Health Prediction",
      description: "Mental Health Assistant using LLM" ,
      imgUrl: llm,
      github: "https://github.com/samriddhi-018/Mental_Health",
    },
    {
      title: "Movie Recommendation System",
      description: "Content-Based Filtering | ML Model",
      imgUrl: Movie,
      github: "https://github.com/samriddhi-018/Movie-Recommendation-System",
    },
    {
      title: "Mano Mitr",
      description: "CNN + VGG16 | Text & Video Based Detection",
      imgUrl: mano,
      github: "https://github.com/samriddhi-018/Mano-Mitr",
    },
    {
      title: "Doctor Appointment System",
      description: "PHP + MySQL Based Dynamic Booking App",
      imgUrl: doc_app,
      github: "https://github.com/samriddhi-018/doctor-appointment-system",
    },
    {
      title: "Multiple Disease Prediction",
      description: "ML Models for Diabetes, Heart, Parkinson’s",
      imgUrl: multi,
      github: "https://github.com/samriddhi-018/Multiple-Disease-Prediction",
    },
    {
      title: "Swasthya",
      description: "Comprehensive Health & Risk Assessment App",
      imgUrl: swasthya,
      github: "https://github.com/samriddhi-018/Swasthya",
    }
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>A showcase of some of the projects I’ve worked on, focused on design, development, and problem-solving.</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
