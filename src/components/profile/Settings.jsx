import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Settings = () => {
    const {user, updateUser} = use(AuthContext);

    const handleUpdateUserInfo = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const updatedUserInfo = Object.fromEntries(data.entries());
        updateUser(updatedUserInfo);
    }
    return (
        <div className="settings">
            <h4>Profile Information</h4>
            <form onSubmit={handleUpdateUserInfo}>
                Name: <input type="text" defaultValue={user?.displayName} name="name" />
                Email: <input type="email" name="email" defaultValue={user?.email} />
                Photo: <input type="text" name="photoUrl" defaultValue={user?.photoURL} />
                Password:<input type="password" name="password" placeholder="Enter new password" minLength={8} />

                <button type="submit">Save changes</button>
            </form>
        </div>
    )
}

export default Settings