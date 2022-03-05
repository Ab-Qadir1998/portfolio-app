import React from "react";
import "./Portfolio.css";
import TitleHeading from "../TitleHeading/TitleHeading";
import PortfolioContent from "../PortfolioContent/PortfolioContent";
import { allImages } from "../../constants/images";
import { reactImages } from "../../constants/images";
const Portfolio = () => {
  const [showTab, setShowTab] = React.useState(1);
  const renderTab = (index) => {
    setShowTab(index);
  };
  return (
    <div className="portfolio__wrapper">
      <TitleHeading coloredTitle="My" title="Portfolio" backTitle="Work" />
      <div className="portfolio__container">
        <div className="portfolio__tabs">
          <button
            className={showTab === 1 ? "tab active-tab" : "tab"}
            onClick={() => renderTab(1)}
          >
            All
          </button>
          <button
            className={showTab === 2 ? "tab active-tab" : "tab"}
            onClick={() => renderTab(2)}
          >
            HTML Template
          </button>
          <button
            className={showTab === 3 ? "tab active-tab" : "tab"}
            onClick={() => renderTab(3)}
          >
            WordPress Template
          </button>
          <button
            className={showTab === 4 ? "tab active-tab" : "tab"}
            onClick={() => renderTab(4)}
          >
            React Template
          </button>
        </div>
        <div className="portfolio__tabs-content">
          <div className={showTab === 1 ? "content active-content" : "content"}>
            <PortfolioContent images={allImages} />
          </div>
          <div className={showTab === 2 ? "content active-content" : "content"}>
            <PortfolioContent images={allImages} />
          </div>
          <div className={showTab === 3 ? "content active-content" : "content"}>
            <PortfolioContent images={allImages} />
          </div>
          <div className={showTab === 4 ? "content active-content" : "content"}>
            <PortfolioContent images={reactImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
