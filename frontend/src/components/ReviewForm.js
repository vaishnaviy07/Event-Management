import React, { useState } from 'react';
import axios from 'axios';

const ReviewForm = ({ eventId }) => {
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = "currentUserId"; // Get the current user's ID

        await axios.post('/api/v1/reviews', { userId, eventId, rating, review });
        // Handle success feedback
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
            </select>
            <textarea 
                value={review} 
                onChange={(e) => setReview(e.target.value)} 
                placeholder="Write your review here..."
            />
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
