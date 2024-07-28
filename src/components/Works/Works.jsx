import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/seed_infotech_logo.jpg";
import Fiverr from "../../img/indira.png";
import Amazon from "../../img/spark.png";
import Shopify from "../../img/SISL-Logo-1.png";
import Facebook from "../../img/savy.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Training Students with different languages and frameworks.
            <br />
           MERN , MEAN , Android , Java , Hibernate , SpringBoot ,
            <br />
            C , CPP, HTML5 , CSS3 , Javascript , Jquery , Bootstrap            <br />
            
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" height={"150px"} width={"150px"}/>
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" height={"150px"} width={"150px"} />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" height={"150px"} width={"150px"}/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" height={"150px"} width={"150px"}/>
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt=""height={"150px"} width={"150px"} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
