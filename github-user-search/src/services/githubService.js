import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUserData = async (username, location, minRepos) => {
  return await searchUsers(username, location, minRepos);
};

export const searchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += username;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `${BASE_URL}?q=${query}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`,
      },
    }
  );

  return response.data.items;
};
