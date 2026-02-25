import { use } from "react"
import { Link, NavLink, Outlet } from "react-router"
import { AuthContext } from "../contexts/AuthContext"

const Profile = () => {
    const { user } = use(AuthContext);

    return (
        <div>
            {/* Two side content layout */}
            <div className="profile">
                <div className="profileDetails">
                    {/* Profile details */}
                    <div>
                        <img className="profilePhoto" src={user && user.photoURL} alt="User photo" referrerPolicy="no-referrer" />
                        <h2> {user && user.displayName} </h2>
                        <p>{user && user.email} <br />
                            {user && user.phoneNumber}</p>
                        <hr />
                    </div>

                    {/* Options */}
                    <div>
                        <ul className="profileLinks">
                            <li><NavLink to="/profile/settings">Settings</NavLink></li>
                            <li><NavLink to="/profile/users-list">Users List</NavLink></li>
                            <li><NavLink to="/profile/admin-list">Admin List</NavLink></li>
                            <li><NavLink to="/profile/tasks">Tasks</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="profile-outlet-container">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Profile