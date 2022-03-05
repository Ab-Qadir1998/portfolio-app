import React from "react";
import "./About.css";
import TitleHeading from "../TitleHeading/TitleHeading";
import { personalInfo, practicalExperience } from "../../constants/data";
import CountUp from "react-countup";
import Skills from "../Skills/Skills";
import EduExperience from "../EduExperience/EduExperience";
const About = () => {
  return (
    <div className="app__about-wrapp" id="about">
      <div className="container">
        <TitleHeading coloredTitle="About" title="Me" backTitle="Resume" />
        <div className="app__about-content_wrapper">
          <div className="app__about-info">
            <h3 className="app__headsidetext">personal Information</h3>
            {personalInfo.map((info, index) => (
              <div className="app__personal-info_wrapper" key={index}>
                <ul className="app__personal_list">
                  <li>
                    <span>First Name: </span>
                    {info.firstName}
                  </li>
                  <li>
                    <span>Last Name: </span>
                    {info.lastName}
                  </li>
                  <li>
                    <span>Age: </span>
                    {info.age}
                  </li>
                  <li>
                    <span>Nationality: </span>
                    {info.nationality}
                  </li>
                  <li>
                    <span>Freelance: </span>
                    {info.freelance}
                  </li>
                  <li>
                    <span>Address: </span>
                    {info.address}
                  </li>
                  <li>
                    <span>Phone: </span>
                    <a href={`tel:${info.phone}`}>{info.phone}</a>
                  </li>
                  <li>
                    <span>Email: </span>
                    <a href={`mailto:${info.email}`}>{info.email}</a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="app__about-exp">
            <div className="app__experience-wrapp">
              {practicalExperience.map((exp, index) => (
                <div key={index}>
                  <div className="exp_upper-row">
                    <div className="app__exp-box">
                      <h3 className="exp__title">
                        <CountUp
                          start={0}
                          end={exp.experience}
                          duration={0.5}
                        />{" "}
                        +
                      </h3>
                      <p className="exp__subtitle">Year Of Experience</p>
                    </div>
                    <div className="app__exp-box">
                      <h3 className="exp__title">
                        <CountUp
                          start={0}
                          end={exp.completedProjects}
                          duration={2}
                        />
                        +
                      </h3>
                      <p className="exp__subtitle">Completed Projects</p>
                    </div>
                  </div>
                  <div className="exp_under-row">
                    <div className="app__exp-box span-">
                      <h3 className="exp__title">
                        <CountUp
                          start={0}
                          end={exp.happyClients}
                          duration={2}
                        />
                        +
                      </h3>
                      <p className="exp__subtitle">Happy Customers</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="line" />
        <Skills />
        <div className="line" />
        <EduExperience />
      </div>
    </div>
  );
};

export default About;
