import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./components/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/blog/1">Blog</Link>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />

      </Routes>

    </Router>
  );
}

export default App;
