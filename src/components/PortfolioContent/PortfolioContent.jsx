import React from "react";
import "./PortfolioContent.css";
import PortfolioModal from "../PortfolioModal/PortfolioModal";

const PortfolioContent = ({ images }) => {
  const [portfolioModal, setPortfolioModal] = React.useState(false);
  const popModal = () => {
    setPortfolioModal(true);
  };
  return (
    <div className="portfolio__content-wrapper">
      <div className="portfolio__box">
        <ul className="portfolio__item">
          {images.map((image, index) => (
            <li key={index}>
              {<img src={image} alt="portfolio_images" onClick={popModal} />}
              {/* <div>
                {portfolioModal && (
                  <PortfolioModal
                    portfolioModal={portfolioModal}
                    setPortfolioModal={setPortfolioModal}
                    image={image}
                  />
                )}
              </div> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PortfolioContent;
