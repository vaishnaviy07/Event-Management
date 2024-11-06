import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <section className="about container">
      <h4>Innovate Events</h4>
      <h2>ABOUT</h2>
      <p>
        Events are the heartbeat of human connection. From electrifying music
        festivals that bring together thousands of fans, to intimate conferences
        where ideas spark innovation, every event creates a unique tapestry of
        shared experiences. Whether it's the joy of witnessing a live
        performance, the thrill of networking at a professional meet-up, or the
        excitement of a community gathering, events have the power to inspire,
        educate, and entertain. They transform ordinary moments into
        unforgettable memories, forging bonds that last a lifetime. Embrace the
        magic of events, where every gathering is a celebration of creativity,
        passion, and unity.
      </p>
      <div className="about-images">
        <img src="/img1.jpeg" alt="Event 1" />
        <img src="/img2.jpeg" alt="Event 2" />
        <img src="/img3.jpeg" alt="Event 3" />
      </div>
    </section>
  );
};

export default About;
