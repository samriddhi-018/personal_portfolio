import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Timeline = () => {
  const education = [
    {
      title: "B.Tech. Computer Science",
      subtitle: "Bennett University (Times of India)",
      year: "2022 – 2026",
      result: "CGPA: 9.65/10"
    },
    {
      title: "Class XII",
      subtitle: "St. Mary’s School, Rampur, U.P",
      year: "2022",
      result: "Percentage: 91%"
    },
    {
      title: "Class X",
      subtitle: "St. Mary’s School, Rampur, U.P",
      year: "2020",
      result: "Percentage: 96%"
    }
  ];

  const experience = [
    {
      title: "Python SDE Intern",
      subtitle: "Infosys Springboard – LGD Management Project",
      year: "Nov 2024 – Jan 2024",
      details: [
        "Developed backend in Django to handle training/course requests.",
        "Designed efficient database models for seamless functionality.",
        "Enhanced system performance to streamline course management."
      ]
    }
  ];

  return (
    <section className="timeline-section" id="timeline">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
              <h2 className="section-title">Education & Experience</h2>
              <div className="timeline-wrapper">

                <div className="timeline-column">
                  <h3 className="timeline-heading">Education</h3>
                  {education.map((item, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <h4>{item.title}</h4>
                        <span>{item.subtitle}</span>
                        <span className="timeline-date">{item.year}</span>
                        <p>{item.result}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="timeline-column">
                  <h3 className="timeline-heading">Experience</h3>
                  {experience.map((item, index) => (
                    <div className="timeline-item" key={index}>
                      <div className="timeline-dot" />
                      <div className="timeline-content">
                        <h4>{item.title}</h4>
                        <span>{item.subtitle}</span>
                        <span className="timeline-date">{item.year}</span>
                        <ul>
                          {item.details.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
