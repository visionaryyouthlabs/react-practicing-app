import { createUserWithEmailAndPassword } from "firebase/auth";
import { use } from "react";
import { Link, useNavigate } from "react-router"
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
    const {createUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleRegisterForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoURL = e.target.photo.value;
        createUser(email, password, name, photoURL);
        navigate("/")
    }
    return(
        <div style={{padding: "30px", }}>
            <form onSubmit={handleRegisterForm}>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name"/> <br /><br />
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" /><br /><br />
                <label htmlFor="Password">Password</label>
                <input type="password" name="password"  /><br /><br />
                <label htmlFor="Photo">Photo URL</label>
                <input type="text" name="photo" />
                <br /><br />
                <button style={{padding: "10px", fontSize: "20px"}} type="submit">Register</button>
            </form>
            
            <p>Already have an account? <Link to="/login"> Login </Link> </p>
        </div>
    )
}

export default Register