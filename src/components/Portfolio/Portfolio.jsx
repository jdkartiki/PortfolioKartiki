import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
import Dominos from "../../img/a.png";
import Goodluck from "../../img/b.png";
import Noise from "../../img/c.png";
import Unsplash from "../../img/d.png";
import Youtube from "../../img/e.png";
import Digital from "../../img/f.png";

import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode ? 'white' : ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://dominosappclone.onrender.com/"><img src={Dominos} alt="Dominos" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://goodluckcafewebsite.onrender.com/"> <img src={Goodluck} alt="Goodluck" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://noisecloneapp.onrender.com/"> <img src={Noise} alt="Noise" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://unsplashclone.onrender.com/"><img src={Unsplash} alt="Unsplash" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://youtubeclone-h7hr.onrender.com/"><img src={Youtube} alt="Youtube" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://digitalmarketingwebsite.onrender.com/"><img src={Digital} alt="Digital" /></a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
