import React, { useEffect } from "react";
import "./Demo.css";

import joinedEvents from "../../assets/mock-joined-events.png";
import searchEvents from "../../assets/mock-search-events.png";
import hostedEvents from "../../assets/mock-hosted-events.png";


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
                <h1>Calendar</h1>
              <img src={joinedEvents} alt="Calendar" />
              <h2>Have an organized calendar view of all the events you plan on attending.</h2>
            </div>
            <div className="demo-middle" data-aos="fade-up">
                <h1>Search</h1>
                <img src={searchEvents} alt="Search" />
                <h2>Search for any upcoming event that is bound to happen.</h2>
            </div>
            <div className="demo-right" data-aos="fade-left">
                <h1>Host</h1>
                <img src={hostedEvents} alt="Tags" />
                <h2>See all the events you are hosting, with a list of people who are joining your events.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

