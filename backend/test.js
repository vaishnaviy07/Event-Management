import { SessionsClient } from '@google-cloud/dialogflow';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config(); 

// Log the project ID and private key path to check if they are set correctly
console.log('Project ID:', process.env.DIALOGFLOW_PROJECT_ID);
console.log('Private Key Path:', process.env.DIALOGFLOW_PRIVATE_KEY_PATH);

const projectId = process.env.DIALOGFLOW_PROJECT_ID;
const client = new SessionsClient({
    keyFilename: process.env.DIALOGFLOW_PRIVATE_KEY_PATH,
});

const sessionId = 'test-session'; // Use a valid session ID
const sessionPath = client.projectAgentSessionPath(projectId, sessionId);

// Log the session path to check its value
console.log('Using Session Path:', sessionPath);

async function detectIntent(message) {
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: message,
                languageCode: 'en',
            },
        },
    };

    try {
        const responses = await client.detectIntent(request);
        console.log('Detected intent');
        console.log(`Response: ${responses[0].queryResult.fulfillmentText}`);
    } catch (error) {
        console.error('Error during Dialogflow request:', error);
    }
}

// Call the function to test it
detectIntent('popular events');
