import React from "react";
import "./Skills.css";
import { skills } from "../../constants/data";
import CountUp from "react-countup";
const Skills = () => {
  return (
    <div>
      <h1 className="app__headsidetext" style={{ textAlign: "center" }}>
        Skills
      </h1>
      {skills.map((skill, index) => (
        <div className="app__skill-wrapper" key={`skills-${index + 1}`}>
          <div className="skill_info">
            <h4 className="skill__title">{skill.lang}</h4>
          </div>
          <div className="app__skill_line-bar">
            <div
              className="skill__line"
              style={{
                width: `${skill.level}%`,
                height: "3px",
                background: "var(--color-primary)",
              }}
            />
            <span className="skill_tooltip">
              <CountUp start={0} end={skill.level} duration={3} />%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
