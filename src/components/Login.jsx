import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router"
import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
    const {signInUser} = use(AuthContext);
    const navigate = useNavigate();

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password);
        navigate("/")
    }
    return(
        <div style={{padding: "30px", }}>
            <form onSubmit={handleLoginForm}>
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" /><br /><br />

                <label htmlFor="Password">Password</label>
                <input type="password" name="password"/><br /><br />
               
                <button style={{padding: "10px", fontSize: "20px"}} type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register"> Register </Link> </p>
        </div>
    )
}
export default Login