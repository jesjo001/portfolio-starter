import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import Dashboard from "../../img/Dashboard.png";
import SourceGraph from "../../img/sourcegraph.png";
import Ecommerce from "../../img/ecommerce.png";
import Ogun from "../../img/ogunstate.png";
import HOC from "../../img/hoc.png";
import ShopTopup from "../../img/shoptopup.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://tradedepot.co" rel="noreferrer" target="_blank">
            <img src={Dashboard} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://about.sourcegraph.com/" rel="noreferrer" target="_blank">
            <img src={SourceGraph} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ogun} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.shoptopup.com/" rel="noreferrer" target="_blank">
            <img src={ShopTopup} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
