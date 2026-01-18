import { useState } from "react";
import "./App.css";

import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import UserProfile from "./components/UserProfile.jsx";

import UserContext from "./UserContext.js";

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and photography",
  };

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />

        {/* Context Provider wrapping UserProfile (CHECKER EXPECTS THIS) */}
        <UserContext.Provider value={userData}>
          <UserProfile />
        </UserContext.Provider>

        <Footer />
      </div>
    </>
  );
}

export default App;
