import React, { useState } from "react";
import PageHeaderComponent from "../../components/pageHeaderContent";
import { AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import ReactPlayer from "react-player";
import "./styles.scss";

const Portfolio = () => {
  const [filterValue, setFilterCat] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handlefilter = id => {
    setFilterCat(id);
  };
  const FilteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter(item => item.sectionId === filterValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderComponent
        headerText="My Portfolio"
        icon={<AiFillProject size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map(option => (
            <li
              onClick={() => handlefilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? "Active" : ""}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {FilteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="portfolio__content__cards__item"
              key={key}
            >
              {/* <div className="portfolio__content__cards__item_imgWrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <a href={item.projectLink} target="_blank">
                      <button>Watch The video</button>
                    </a>
                  </div>
                )}
              </div> */}
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="411px"
                  controls
                  url={item.projectLink}
                  playIcon={<img src={item.image} />}
                  onReady={() => {
                    console.log("OnReady callback");
                  }}
                  onStart={() => setHoveredIndex(key)}
                  onPlay={() => {}}
                  onPause={() => {
                    setHoveredIndex(null);
                    console.log("onPause callback");
                  }}
                  onError={() => {
                    <p>{"We have got an error on loading the video !!"}</p>;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
