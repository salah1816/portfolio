import React from "react";
import { GiSkills } from "react-icons/gi";
import { skillsData, saftware } from "./utils";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="Software used"
        icon={<GiSkills size={30} />}
      />
      {/* <Animate
        play
        duration={1}
        delay={0.4}
        start={{ transform: "translateX(-800px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="skills__contentWrapper">
          {skillsData.map((item, key) => (
            <div key={key} className="skills__contentWrapper__inner-content">
              <h2 className="skills__contentWrapper__inner-content__category-text">
                {item.label}
              </h2>
              <div>
                {item.data.map((itemData, key) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity: 0"]}
                  >
                    <div key={key} className="progressBarWrapper">
                      <p>{itemData.skillName}</p>
                      <Line
                        percent={itemData.percentage}
                        strokeWidth="2"
                        trailWidth="2"
                        strokeColor="var(--selected-theme-main-color)"
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Animate> */}
      <div className="software__contentWrapper">
        {saftware.map((item, key) => (
          <div key={key}>
            {/* <AnimateKeyframes
              play
              duration={2}
              keyframes={["opacity : 1", "opacity: 0"]}
            > */}
            <div>
              <img src={item.path} width={250} />
            </div>

            <h2
              className={`${item.name === "Adobe Photoshop" ? "active" : ""}`}
            >
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
