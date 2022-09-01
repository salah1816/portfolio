import React from "react";
import "./styles.scss";
import { Animate } from "react-simple-animate";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsappSquare,
  FaYoutube
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Yasser
          <br />a Video Editor.
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(600px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="contact-me">
          <div className="contact-me__a-s-wrapper">
            <a
              className="left-a"
              href="https://wa.me/213793948320"
              target="_blank"
            >
              <span>Let's talk on </span>
              <img src={"./img/whatsapp.ico"} width={28} />
            </a>

            <Link to={"/portfolio"} className="right-a">
              <span>Check Portfolio</span>
            </Link>
          </div>
          <div className="contact-me__social-wrapper">
            <a
              href="https://www.youtube.com/channel/UCepDkbwvmQ8e-4tGUFIYEtQ"
              target="_blank"
            >
              <FaYoutube size={32} />
            </a>
            <a
              href="https://www.instagram.com/know_your_computer/"
              target="_blank"
            >
              <FaInstagram size={32} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100074377368582"
              target="_blank"
            >
              <FaFacebook size={32} />
            </a>
            <a href="https://wa.me/213793948320" target="_blank">
              <FaWhatsappSquare size={32} />
            </a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
