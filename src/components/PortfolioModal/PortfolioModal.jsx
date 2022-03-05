import React from "react";
import "./PortfolioModal.css";
const PortfolioModal = ({ portfolioModal, setPortfolioModal }) => {
  return (
    <div>
      <button onClick={() => setPortfolioModal(false)}>&times;</button>
      <h1>text</h1>
    </div>
  );
};

export default PortfolioModal;
