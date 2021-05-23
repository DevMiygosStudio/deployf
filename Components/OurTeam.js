import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/OurTeam.module.css";
import arun from "../assets/arun.jpg";
import hetesh from "../assets/hetesh.jpeg";
import kamal from "../assets/kamal.jpg";
import teamImage from "../assets/team.jpg";


const OurTeam = () => {
  return (
    <div>
      <Container fluid className={styles.landingContainer}>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h3
              style={{
                textAlign: "center",
                marginBottom: "1.5em",
                fontWeight: "bold",
                textTransform:"uppercase"
              }}
            >
              Our Team
            </h3>
            <Row className="align-items-center">
              <Col xs={12}  md={6} className="justify-content-center">
                <div
                  className="teamImage"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={kamal}
                    alt="Kamalesh Image"
                    className={styles.teamImgContainer}
                    fluid
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <h3>Kamalesh</h3>
                <h5>"Front End is my habitat"</h5>
                <p>FrontEnd Developer & Designer</p>
              </Col>
            </Row>
            <Row className="align-items-center mt-4">
              <Col
                xs={12}
                d-flex
                md={6}
                className="justify-content-center"
                xs={{ order: "first" }}
                md={{ order: "last" }}
              >
                <div className="teamImage">
                  <img
                    src={arun}
                    alt="Kamalesh Image"
                    className={styles.teamImgContainer}
                    fluid
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <div>
                    <h3>Arun Mukesh</h3>
                    <h5>"I make app's breathe"</h5>
                    <p>Backend Developer & Engineer</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="align-items-center  mt-4">
              <Col xs={12}  md={6} className="justify-content-center">
                <div
                  className="teamImage"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <img
                    src={hetesh}
                    alt="Kamalesh Image"
                    className={styles.teamImgContainer}
                    fluid
                  />
                </div>
              </Col>
              <Col xs={12} md={6}>
                <h3>Hetesh Chandra Rao</h3>
                <h5>"I qualitize the Product"</h5>
                <p>Book Keeper</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <div>
              <img
                src={teamImage}
                alt="aboutImage"
                className={styles.imgContainer}
                fluid
              />
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeam;
