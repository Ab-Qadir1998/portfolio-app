import React from "react";
import "./PortfolioContent.css";

const PortfolioContent = ({ images }) => {
  return (
    <div className="portfolio__content-wrapper">
      <div className="portfolio__box">
        <ul className="portfolio__item">
          {images.map((image, index) => (
            <li key={index} >
              {<img src={image}  alt="portfolio_images" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioContent;
