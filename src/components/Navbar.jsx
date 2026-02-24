import { use } from "react"
import { Link } from "react-router"
import { AuthContext } from "../contexts/AuthContext"

const Navbar = () => {
    const { user, LogOut } = use(AuthContext);
    return (
        <div className="navbar-container">
            <h2>React Practicing</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            {/* Profile details */}
            {
                user &&
                <div>
                    <div style={{ display: "flex", gap: "4px" }}>
                        <img style={{ width: "60px", height: "60px", borderRadius: "50%", border: "2px solid blue" }} src={user && user.photoURL} alt={user && user.displayName} />
                        <button onClick={LogOut} style={{ backgroundColor: "transparent", border: "none", color: "blue", fontWeight: "800", fontSize: "16px", cursor: "pointer" }}>Log Out</button>
                    </div>
                    <p>{user && user.displayName || "Unknown"} <br />
                        {user && user.email}
                    </p>
                </div>
            }
        </div>
    )
}

export default Navbar