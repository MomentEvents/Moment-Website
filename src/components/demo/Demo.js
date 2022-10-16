import React, { useEffect } from "react";
import "./Demo.css";

import phoneFeatures from "../../assets/phone-features.png";



import AOS from "aos";
import "aos/dist/aos.css";

const Demo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <section id="demo">
        <div className="container demo">
          
          <div className="demo-content">
            <div className="demo-left" data-aos="fade-right">
                <h1>Item 1</h1>
              <img src={phoneFeatures} alt="phone" />
              <h2>Description</h2>
            </div>
            <div className="demo-middle" data-aos="fade-up">
                <h1> Item 2</h1>
                <img src={phoneFeatures} alt="phone" />
                <h2>Description</h2>
            </div>
            <div className="demo-right" data-aos="fade-left">
                <h1>Item 3</h1>
                <img src={phoneFeatures} alt="phone" />
                <h2>Description</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

