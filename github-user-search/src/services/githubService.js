import axios from 'axios';

const BASE_URL = "https://api.github.com/search/users?q"; //API base URL

// Function to search for a GitHub user by username
export const fetchUserData = async (username) => {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
};

export const searchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `${BASE_URL}/search/users?q=${query}`
  );

  return response.data.items; 
};