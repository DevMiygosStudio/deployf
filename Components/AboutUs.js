import React from "react";
import styles from "../styles/AboutUs.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutImage from "../assets/myAbouts.png";

const AboutUs = () => {
  return (
    <div>
      <Container fluid className={styles.landingContainer} id="about">
        <Row className="align-items-center">
          <Col xs={12} md={6} xs={{ order: "last" }} md={{ order: "first" }}>
            <div>
              <img
                src={AboutImage}
                alt="aboutImage"
                className={styles.imgContainer}
                fluid
              />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.aboutContent}>
              <div className={styles.about}>
                <h3>About Dev Miygos</h3>
                <p>
                  Dev Miygos Studio is an aspiration of three nerds, who were
                  desperate to create a medium, which facilitate B2B and B2C
                  business models by supporting SaaS.
                </p>
              </div>
              <div className={styles.about}>
                <h3>Vision</h3>
                <p>
                  To shape an elegant business module, which will assist our
                  customer's growth
                </p>
              </div>
              <div className={styles.about}>
                <h3>Mantra</h3>
                <blockquote>You Dream, We Deliver</blockquote>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
