import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div className="forgot-password-container">
            <h1>Forgot Password</h1>
            <form className="forgot-password-form">
                <input type="email" placeholder="Enter your email" required className="email-input" />
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default ForgotPassword;
