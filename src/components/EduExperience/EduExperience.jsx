import React from "react";
import "./EduExperience.css";
import { experience, education } from "../../constants/data";
import { ImBook } from "react-icons/im";
import { IoBagRemoveSharp } from "react-icons/io5";
const EduExperience = () => {
  return (
    <div>
      <h1 className="app__headsidetext" style={{ textAlign: "center" }}>
        Experience & Education
      </h1>
      <div className="edu__exp-wrapper">
        <div className="education__box">
          <ul className="edu__exp-list">
            {education.map((edu, index) => (
              <li key={index}>
                <span className="edu__exp-icon_box">
                  <ImBook />
                </span>
                <div>
                  <h4>{edu.year}</h4>
                  <h3>{edu.degreeFrom}</h3>
                  <p>{edu.degree}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="experience__box">
          <ul className="edu__exp-list">
            {experience.map((exp, index) => (
              <li key={index}>
                <span className="edu__exp-icon_box">
                  <IoBagRemoveSharp />
                </span>
                <div>
                  <h4>
                    {exp.yearFrom} - {exp.yearTo}
                  </h4>
                  <h3>{exp.company}</h3>
                  <p>{exp.designation}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EduExperience;
