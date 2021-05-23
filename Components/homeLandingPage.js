import React from "react";

import styles from "../styles/Home.module.css";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import LandingPage from "./LandingPage";
import OurTeam from "./OurTeam";
import FormEmail from "./FormEmail";
import Footer from "./Footer";

function HomeLandingPage() {
  return (
    <div className={styles.body}>
      <NavBar />
      <LandingPage />
      <AboutUs />
      <OurTeam />
      <FormEmail />
      <Footer />
    </div>
  );
}

export default HomeLandingPage;
