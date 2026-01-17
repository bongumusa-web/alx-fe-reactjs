
import { Link } from "react-router-dom";

function Navbar() {
    return (
         <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <ul style={{listStyle:"none", color:"blue", fontFamily:"monospace", float:"left", display:"flex", gap:"15px", fontSize:"20px"}}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
    )

}

export default Navbar;