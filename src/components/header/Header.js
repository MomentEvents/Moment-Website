import React, { useState, useEffect } from "react";
import "./Header.css";
// import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";

import discord from "../../assets/discordicon.svg";
// import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <section id="header">
      <div className="container header">
        <div className="aligning-contents-center">
          <div className="header-left" data-aos="fade-right">
            <h1>
              <span className="main-text">Finding events is hard</span>
              <span className="subtitle-text">Let's make it easier</span>
              {/* <span>is a Lorem ipsum dolor sit amet, consectetur adipisicing</span> */}
            </h1>

            <div className="release-text">
              Final app release coming very <br></br> soon to UIUC and UCSD!
            </div>
            <br></br>
            {isMobile ? 
                        <a
                        href="https://discord.com/invite/dQZ64mGgbP"
                        target="_blank"
                        class="button"
                        id="temp-page"
                      >
                        <img src={discord} className="discord-icon-mobile" alt="discord" />
                        Join our discord!
                      </a>
                      : <></>
            }

            {/* <div className="header-cta">
            <Button text={"Get Started"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"How It Works"} btnClass={"btn-light"} href={"#"} />
          </div> */}
          </div>
        </div>
        {/* <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div> */}
      </div>
      {/* <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div> */}
    </section>
  );
};

export default Header;
