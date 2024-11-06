import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Signup";
import FunctionHalls from "./components/FunctionHalls";
import ForgotPassword from './components/ForgotPassword';
import ChatBot from './components/Chatbot';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/function-halls" element={<FunctionHalls />} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        
      </Routes>
      <ChatBot />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
