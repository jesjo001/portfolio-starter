import React, { useContext } from "react";
import "./Works.css";
import TechHub from "../../img/techhub.png";
import Ogun from "../../img/ogun.png";
import Trade from "../../img/trade.svg";
import Gitstart from "../../img/Gg.png";
import GitS from "../../img/gitStart.png";
import Automation from "../../img/auto.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
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
            Worked for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
          I have worked for a couple of Companies both national and international.
            <br /> Some of the Clients I worked for are but are not limited to the following: <br /> GitStart, Trade depot, OgunTech Hub, e.t.c. 
            <br /> <br /> I have also had experience working in a physical and remote environment,
            <br /> while gaining numerous experiences working with different companies and clients.
            <br />
            <br /> I also have experience working in an Agile and Scrum environment. 
      
          </spane>
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
            <img src={TechHub} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Ogun} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Trade} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Gitstart} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Automation} alt="" />
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
