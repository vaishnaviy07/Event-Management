import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // Assuming Login.css is in the same directory

function Login() {
    const navigate = useNavigate(); // Correct hook to navigate after login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/login", {
                email, 
                password
            });

            console.log(response.data); // Debugging: Log the response

            if (response.data === "exist") {
                localStorage.setItem('user', email); // Store user email in localStorage
                navigate("/"); // Redirect to Home page
            } else {
                alert("User has not signed up or wrong credentials.");
            }
        } catch (error) {
            alert("Error during login. Please try again.");
            console.error(error);
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form method="POST" onSubmit={submit}>
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
                    value="Login"
                />
            </form>

            <p>If you're a new user, please <Link to="/register">SIGN UP</Link></p>
            <Link to="/forgot-password" style={{ marginTop: '10px', display: 'block', cursor: 'pointer' }}>
                Forgot Password
            </Link>
        </div>
    );
}

export default Login;
