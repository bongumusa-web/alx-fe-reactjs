import { useState } from "react";
import { fetchUserData } from "../services/githubService.js";

function Search() {

    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null); // State used to store the fetched user information
    const [loading, setLoading] = useState(false); // State to track loading status
    const [error, setError] = useState(null); // State to handle error messages

    const handleSubmit = async (event) => {
        event.preventDefault();
        //console.log(username);
        setLoading(true); // Enable loading state before starting the request
        setError(""); // Reset any previous error messages
        setUserData(null); // Clear previously fetched user data

        try {
            const data = await fetchUserData(username); // Retrieve user data using the service function
            setUserData(data); // Save the fetched data into state

        }
        catch (err) {
            setError("Looks like we cant find the user"); // Display error if user is not found
        }
        finally {
            setLoading(false); // Disable loading state once the request is complete
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search GitHub username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}  
            {error && <p style={{ color: 'red' }}>{error}</p>}  

            {userData && (
                <div>
                    <img 
                        src={userData.avatar_url} 
                        alt="avatar" 
                        width="100" 
                        height="100" 
                    />
                    <h2>{userData.login}</h2> {/*Display username */} 
                    <a 
                        href={userData.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Profile
                    </a> 
                </div>
            )}
        </div>
    );
}

export default Search;
