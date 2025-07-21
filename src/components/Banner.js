import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/photo.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(50);  // faster typing
  const [index, setIndex] = useState(1);
  const toRotate = ["Python Developer", "ML Engineer", "Data Analyst"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(30);  // match typing speed
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);  // pause before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(30);  // restart typing fast
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home" style={{ paddingTop: '20px', paddingBottom: '150px' }}>
      <Container>
        <Row className="aligh-items-center" style={{ marginTop: '10rem' }}> 
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h1 style={{ fontWeight: '700', color: '#fff', marginBottom: '0.2rem' }}>
                    Samriddhi Gupta
                  </h1>
                  <h5 style={{
                    fontWeight: '700',
                    fontSize: '2rem',
                    color: '#386bb9ff',
                    marginLeft: '20rem',
                    marginTop: '0.3rem',
                    minHeight: '2.5rem'
                  }}>
                    — <span className="wrap">{text}</span>
                  </h5>

                  <p style={{ marginTop: '1rem' }}>
                    I'm an AI-ML enthusiast and a Computer Science student passionate about building impactful solutions through machine learning, data science, and software development. I am keen about exploring new technologies and applying them to real-world problems — especially in the healthcare and mental health space. With a strong foundation in Python, web development, and cloud tools, I'm constantly learning, growing, and pushing boundaries.
                  </p>

                  <button onClick={() => window.location.href = "https://drive.google.com/file/d/1MCPgHsI8NtmClsCQoz00T_GBD_fRN3XC/view?usp=sharing"}>
                    View Resume <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
