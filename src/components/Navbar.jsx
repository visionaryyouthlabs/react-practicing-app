import { Link } from "react-router"

const Navbar = () => {
    return(
        <div className="navbar-container">
            <h2>React Practicing</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            {/* Profile details */}
            <div>

            </div>
        </div>
    )
}

export default Navbar