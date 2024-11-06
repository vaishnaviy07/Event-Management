import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Signup.css"; // Assuming Signup.css is in the same folder

function Signup() {
    const history = useNavigate();

    // State variables for name, email, and password
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/signup", {
                name, // Send the name field
                email,
                password
            });

            // Handle the response based on server logic
            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                alert("You have signed up successfully!"); // Display success message
                history("/login"); // Redirect to the login page after successful signup
            }
        } catch (error) {
            alert("Error during signup");
            console.error(error);
        }
    }

    return (
        <div className="login">
            <h1>Signup</h1>

            <form method="POST" onSubmit={submit}>
                <input 
                    type="text" 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name" 
                    required 
                />
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
                <input 
                    type="submit" 
                    value="Sign Up"
                />
            </form>

            <p>If you're a returning user, please</p>
            <Link to="/login">LOGIN</Link>
        </div>
    );
}

export default Signup;
