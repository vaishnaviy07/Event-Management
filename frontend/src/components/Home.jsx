import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    if (!userEmail) {
      navigate("/login"); // Redirect to login if user is not logged in
    } else {
      setEmail(userEmail); // Set the email from localStorage
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <nav>
        <a href="/services">Services</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="user-info">
        {email && (
          <>
            <span>{email}</span> {/* Display user email */}
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
