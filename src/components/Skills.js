import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const skillGroups = [
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Hugging Face", "LLM", "NLP", "Scikit-learn"]
  },
  {
    title: "Data Science & Big Data",
    skills: ["Python", "MySQL", "Time Series", "Pandas", "NumPy", "Hadoop", "PySpark", "Apache Pig"]
  },
  {
    title: "Data Visualization",
    skills: ["Power BI", "Matplotlib", "Seaborn", "Plotly", "MS Excel"]
  },
  {
    title: "Developer Tools & Frameworks",
    skills: ["Git", "VS Code", "Figma", "Flask", "Django", "Node.js"]
  },
  {
    title: "Frontend & UI",
    skills: ["HTML", "CSS", "JavaScript", "React.js"]
  },
  {
    title: "Software & Utilities",
    skills: ["Google Colab", "Jupyter Notebook", "Cloudera"]
  }
];

export const Skills = () => {
  return (
    <section className="skills-formal" id="skills">
      <Container>
        <h2 className="text-center section-title">Skills</h2>
        <Row>
          {skillGroups.map((group, idx) => (
            <Col md={6} key={idx} className="mb-4">
              <div className="skill-box-formal">
                <h5 className="skill-box-title">{group.title}</h5>
                <ul className="skill-list-formal">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="skill-pill-formal">{skill}</li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
