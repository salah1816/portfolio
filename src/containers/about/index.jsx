import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill, BsChatTextFill } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiPayoneer } from "react-icons/si";
import { MdVerified } from "react-icons/md";
import { personalData } from "./utils";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(-800px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="developerContent">Video Editor</h3>
            <p>
              Hello , I am Yasser , Pro Video Editor . I worked with a lot of
              Youtubers, Tiktokers and agencies. My aim is to ensure customer
              satisfaction! Among others, I can offer the following for your
              project: color correction, color grading, audio noise reduction,
              royalty-free background music, royalty-free stock video and
              animated motion text . I'll make your video according to your
              requirements .
            </p>
          </Animate>

          {/* <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate> */}
        </div>
        <div className="about__content__serivceWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <div className="about__content__serivceWrapper__innerContent">
              <div>
                <FaWhatsappSquare
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <BsChatTextFill
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <SiPayoneer
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <MdVerified
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
