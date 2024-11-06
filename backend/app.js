import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import User from './models/User.js';
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
import cors from "cors";
import pkg from 'dialogflow';
import fs from 'fs';  // Import fs module
import { SessionsClient } from '@google-cloud/dialogflow';
import { predictPopularity } from './ml/popularity.js';

dotenv.config({ path: "./config/.env" });
const app = express();
const projectId = process.env.DIALOGFLOW_PROJECT_ID;

const sessionClient = new SessionsClient({
    keyFilename: process.env.DIALOGFLOW_PRIVATE_KEY_PATH,  // Use the path from your .env file
});

// Function to create session path
const sessionPath = (sessionId) => {
    return sessionClient.projectAgentSessionPath(projectId, sessionId);
};

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/chatbot', async (req, res) => {
    const { message } = req.body;

    const request = {
        session: sessionPath('user-session'), // Call sessionPath with a session ID
        queryInput: {
            text: {
                text: message,
                languageCode: 'en',
            },
        },
    };

    try {
        const responses = await sessionClient.detectIntent(request);
        let result = responses[0].queryResult.fulfillmentText;

        // If the message includes 'popular event', run the popularity prediction
        if (message.toLowerCase().includes('popular event')) {
            const popularEvents = await predictPopularity();  // Call Python prediction model
            result += ` Here are the most popular events: ${popularEvents}`;
        }

        res.json({ response: result });
    } catch (error) {
        console.error('Dialogflow request error:', error);
        res.status(500).send('Chatbot failed to respond');
    }
});

// Home route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// Signup route
app.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;

    // Check if user exists in the database
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.send("exist"); // User already exists
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.send("notexist"); // User created successfully
});

// Login route
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }); // Find user by email
        if (user) {
            // Compare the provided password with the hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json("exist"); // Passwords match, login successful
            } else {
                res.json("notexist"); // Passwords do not match
            }
        } else {
            res.json("notexist"); // User not found
        }
    } catch (error) {
        res.json("fail"); // Handle errors
        console.error(error);
    }
});

// Connect to MongoDB
dbConnection();

export default app;
