import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/_firebase.init";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const createUser = async (email, password, name, photoUrl) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const createdUser = userCredential.user;
        //Update user
        await updateProfile(createdUser, {
            displayName: name,
            photoURL: photoUrl
        })
    };

    const signInUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            }).catch(err => console.log(err))
    }
    const LogOut = () => {
        signOut(auth);
    }

    // Observer of Firebase
    useEffect((() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else { setUser(null) }
        })
        return () => unSubscribe();
    }), [])

    const userInfo = {
        createUser,
        signInUser,
        user,
        setUser,
        LogOut
    };
    return <AuthContext value={userInfo}> {children} </AuthContext>
}

export default AuthProvider