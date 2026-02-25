import { use } from "react"
import { Link, useNavigate } from "react-router"
import { AuthContext } from "../contexts/AuthContext"

const Navbar = () => {
    const navigate = useNavigate();

    const { user, LogOut } = use(AuthContext);
    const handleLogOut = async() => {
        try {
            await LogOut();
            navigate("/");
        } catch (error) {
            console.log("log out error happened", error)
        }

    }
    return (
        <div className="navbar-container">
            <h2>React Practicing</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {
                    user ? <li onClick={handleLogOut} style={{ border: "none", cursor: "pointer" }}> LogOut</li>
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