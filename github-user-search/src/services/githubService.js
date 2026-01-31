import axios from 'axios';

const BASE_URL = "https://api.github.com/users"; //API base URL

// Function to search for a GitHub user by username
export const fetchUserData = async (username) => {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
};