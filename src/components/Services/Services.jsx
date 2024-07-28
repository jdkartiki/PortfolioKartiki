import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <span>
        "Dynamic Full Stack Developer with extensive experience in designing <br></br>and implementing scalable web applications using modern technologies. <br></br>Adept at delivering comprehensive corporate training programs to <br></br>enhance technical proficiency and foster continuous learning. <br></br>Skilled in both front-end and back-end development,<br></br> with a strong focus on responsive design, performance optimization,<br></br> and seamless user experiences. Committed to driving innovation<br></br> and excellence through effective collaboration and mentorship."
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Web Developer"}
            detail={"HTML5, CSS3, JavaScript, ES6/ES7,TypeScript,MEAN, MERN"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "15rem" }}
          whileInView={{ left: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Full Stack Developer"}
            detail={"MERN, MEAN ,WEB ,JAVA ,PYTHON ,ANDROID"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Corporate Trainer"}
            detail={
              "Training student with MERN, MEAN ,WEB ,JAVA ,PYTHON ,ANDROID"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
