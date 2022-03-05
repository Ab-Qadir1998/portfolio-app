import React from "react";
import "./Banner.css";
import BannerImage from "../../assets/images/banner-image.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="app__banner-wrapper">
      <div className="app__banner-content-wrapp">
        <div className="banner__image">
          <img src={BannerImage} alt="banner-image" />
        </div>
        <div className="banner__content">
          <h1 className="app__headtext">
            <strong>Abdul Qadir Khan</strong> FrontEnd Developer
          </h1>
          <p className="p__poppins">
            I'm a front‑end developer focused on crafting clean & user‑friendly
            experiences, I am passionate about building excellent software that
            improves the lives of those around me.
          </p>
          <button className="app__button">
            <a href="#about">
              <span>More About Me</span>
            </a>{" "}
            <AiOutlineArrowRight fontSize={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
