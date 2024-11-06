import app from "./app.js"; // Ensure this is correct
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
