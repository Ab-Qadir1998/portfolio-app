import React from "react";
import "./TitleHeading.css";
const TitleHeading = ({ coloredTitle, title, backTitle }) => {
  return (
    <div className="app__centered-title">
      <span className="back__title">{backTitle} </span>
      <h1>
        <span> {coloredTitle}</span>
        {title}
      </h1>
    </div>
  );
};

export default TitleHeading;
