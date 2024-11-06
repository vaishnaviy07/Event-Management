import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userEmail, setUserEmail] = useState(''); 
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (user) {
      setIsLoggedIn(true);
      setUserEmail(user); 
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); 
    setIsLoggedIn(false); 
    setUserEmail(''); 
    navigate("/login"); 
  };

  return (
    <nav>
      <div className="logo">KING's</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {isLoggedIn ? (
            <>
              <Link to="/">HOME</Link>
              <Link to="/services">SERVICES</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
              {/* Display logged-in user's email */}
              <span style={{ marginLeft: '10px', marginRight: '10px' }}>
                {userEmail}
              </span>
              <button 
                onClick={handleLogout} 
                style={{ cursor: 'pointer' }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register">SIGN UP</Link>
              <Link to="/login">LOGIN</Link>
            </>
          )}
        </div>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
