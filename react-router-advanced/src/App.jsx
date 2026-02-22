import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost.jsx";


import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>

      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog Post</Link>
      </nav>

      <Routes>

        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        >
          {/* Nested Routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

      </Routes>
    </div>
  );
}

export default App;
