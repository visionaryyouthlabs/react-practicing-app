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
                {
                    user ? <li onClick={LogOut} style={{ border: "none", cursor: "pointer" }}> LogOut</li>
                        : <li><Link to="/login">Login</Link></li>
                }
            </ul>
            {/* Profile details */}
            <div>
                {
                    user &&
                    <Link to="/profile">
                        <img style={{ width: "60px", height: "60px", borderRadius: "50%", border: "2px solid blue" }} src={user?.photoURL} alt={user && user.displayName} />
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar