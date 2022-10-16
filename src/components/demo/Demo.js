import React, { useEffect } from "react";
import "./Demo.css";

import personalCalendar from "../../assets/PersonalCalendar.png";
import searchEvent from "../../assets/SearchEvent.png";
import selectTags from "../../assets/SelectTags.png";


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
                <h1>Personal calendar</h1>
              <img src={personalCalendar} alt="PersonalCalendar" />
              <h2>Have an organized calendar view of all the events you want to attend</h2>
            </div>
            <div className="demo-middle" data-aos="fade-up">
                <h1> Search events</h1>
                <img src={searchEvent} alt="phone" />
                <h2>Search for any upcoming events that are bound to happen</h2>
            </div>
            <div className="demo-right" data-aos="fade-left">
                <h1>Tag filtering</h1>
                <img src={selectTags} alt="selectTags" />
                <h2>Customize your home page by inputting what events YOU want to see.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;

