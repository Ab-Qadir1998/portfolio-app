import React, { useState } from "react";
import "./PortfolioContent.css";

const PortfolioContent = ({ images }) => {
  const [ openModal, setopenModal ] = useState(false)
  const [ modalImage, setModalImage ] = useState('')
  const getImage = (imageSrc)=> {
    setModalImage(imageSrc)
    setopenModal(true)
  }
  return (
    <>
    {openModal ? (
      <div className={openModal ? 'modal opened' : 'modal'}>
      <div className="modalBody">
      <button className="close_btn" onClick={()=> setopenModal(false)}>&times;</button>
      <img src={modalImage}/>
      </div>
    </div>
    ) : null}
    <div className="portfolio__content-wrapper">
      <div className="portfolio__box">
        <ul className="portfolio__item">
          {images.map((item, index) => (
            <li key={index} onClick={()=> getImage(item.imageSrc)}>
              {<img src={item.imageSrc}  alt="portfolio_images"/>}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};


export default PortfolioContent;
