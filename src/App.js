import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Theme from "./components/theme";
import "./App.scss";
import NavBar from "./components/nevBar";
import { async } from "q";
import particleConfig from "./helpers/particleConfig";

function App() {
  const particlesInit = async main => {
    await loadFull(main);
  };
  console.log(useLocation());
  return (
    <div className="App">
      {/*render particle js only in home page*/}
      {useLocation().pathname === "/" && (
        <Particles
          id="particles"
          params={particleConfig}
          init={particlesInit}
        />
      )}
      {/** navbar component */}
      <div className="App__navbar-wrapper">
        <NavBar />
      </div>
      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          {/** create all routes */}
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
