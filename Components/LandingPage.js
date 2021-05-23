import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/LandingPage.module.css";
import landingImage from "../assets/web.jpg";

const LandingPage = () => {
  return (
    <div id='Home'>
      <Container fluid className={styles.landingContainer}>
        <Row className="align-items-center" style={{height:'100%'}}>
          <Col xs={12} md={6} d-flex className="align-items-center">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%"
              }}
            >
              <div>
                <h1 className={styles.landingTitle}>Ay MiYgoS!</h1>
                <p className={styles.landingQuote}>
                  LET'S ANNOUNCE !📢 our arrival to the world of Internet.
                  <br />
                  One stop solution for all your web and mobile needs!
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <img
              src={landingImage}
              alt="landingImage"
              className={styles.imgContainer}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
