// src/components/HeroSection.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  const isLoggedIn = localStorage.getItem("user"); // Check if user is logged in by verifying the existence of user data
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (isLoggedIn) {
      navigate("/function-halls"); // Redirect to function halls if logged in
    } else {
      alert("Please log in first."); // Alert the user to log in
      navigate("/login"); // Redirect to login page
    }
  };

  return (
    <section className="hero">
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <h1>Your Personal Dream Maker</h1>
        <p>We believe that it is all about the BIG DREAMS and the small details!</p>
        <button onClick={handleBookNow} className="book-now-btn">
          Click Here for function halls
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
