import { useState } from "react"; 
// Import useState hook to manage component state

import { fetchUserData } from "../services/githubService.js"; 
// Import the function responsible for fetching GitHub user data

function Search() {

    // State to store the entered GitHub username
    const [username, setUsername] = useState("");

    // State to store the fetched GitHub user data
    const [userData, setUserData] = useState(null);

    // State to indicate whether data is currently being loaded
    const [loading, setLoading] = useState(false);

    // State to store error messages when something goes wrong
    const [error, setError] = useState(null);

    // State to store the location filter entered by the user
    const [location, setLocation] = useState("");

    // State to store the minimum repository count filter
    const [minRepos, setMinRepos] = useState("");

    // Function that runs when the form is submitted
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page reload on form submission
        

        setLoading(true); // Start loading before making the API request
        setError(""); // Clear any previous error messages
        setUserData(null); // Reset previously fetched user data

        try {
            // Fetch user data from GitHub using the provided username
            const data = await fetchUserData(username, location, minRepos);

            // Store the fetched user data in state
            setUserData(data);

        } catch (err) {
            // Show an error message if the user cannot be found
            setError("Looks like we cant find the user");
        } finally {
            // Stop loading once the request finishes (success or failure)
            setLoading(false);
        }
    };

    return (
        <div>
            {/* Search form container */}
            <form
                onSubmit={handleSubmit} // Handle form submission
                className="flex flex-col gap-4 bg-white p-6 rounded shadow-md"
            >
                {/* Input field for GitHub username */}
                <input
                    type="text"
                    placeholder="GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
                    className="border p-2 rounded"
                />

                {/* Input field for filtering users by location */}
                <input
                    type="text"
                    placeholder="Location (e.g. Nigeria)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} // Update location state
                    className="border p-2 rounded"
                />

                {/* Input field for minimum repository count */}
                <input
                    type="number"
                    placeholder="Minimum repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)} // Update repo count state
                    className="border p-2 rounded"
                />

                {/* Submit button to trigger the search */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>

            {/* Display loading message while fetching data */}
            {loading && <p>Loading...</p>}

            {/* Display error message if an error occurs */}
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Display user data once it has been successfully fetched */}
           {userData && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                 {userData.map((user) => (
                  <div key={user.id} className="border p-4 rounded shadow-sm">
                     <img src={user.avatar_url} alt="avatar"className="w-20 h-20 rounded-full" />
                     <h2 className="font-semibold mt-2">{user.login}</h2>
                     <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      View Profile
                     </a>
                </div>
           ))}
           </div>
)}

        </div>
    );
}

export default Search; 
// Export the Search component for use in other parts of the app
