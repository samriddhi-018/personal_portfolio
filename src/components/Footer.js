import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md={6} className="text-md-start text-center mb-4 mb-md-0">
            <h2 className="footer-heading">Let's Connect</h2>
          </Col>
          <Col xs={12} md={6} className="text-md-end text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/samriddhi-gupta-018" target="_blank" rel="noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
              </a>
              <a href="https://github.com/samriddhi-018" target="_blank" rel="noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://leetcode.com/samriddhi018" target="_blank" rel="noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" />
              </a>
              <a href="mailto:samriddhiguptaofficial@gmail.com">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968534.png" alt="Gmail" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
