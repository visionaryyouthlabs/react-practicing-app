import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, updateProfile, verifyBeforeUpdateEmail } from "firebase/auth";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/_firebase.init";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useNavigation } from "react-router";

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
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
    const updateUser = async (updatedUserInfo) => {
        const {name, email, password, photoUrl} = updatedUserInfo;
        try {
            // Update Profile name and photo
            if(name || photoUrl){
                await updateProfile(auth.currentUser, {
                    displayName: name || auth.currentUser.displayName,
                    photoURL: photoUrl || auth.currentUser.photoURL
                });
            }
            // Update email
            if(email && email !== auth.currentUser.email){
                await verifyBeforeUpdateEmail(auth.currentUser, email);
                alert("Please check your inbox to update email")
            };
            // Update password
            if(password){
                await updatePassword(auth.currentUser, password)
            }

            alert("Profile Updated successfully!")
        } catch (error) {
            console.log(error)
        }

    }
    // Observer of Firebase
    useEffect((() => {
        setLoading(true);
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else { setUser(null) }
            setLoading(false);
        })
        return () => unSubscribe();
    }), [])

    const userInfo = {
        createUser,
        signInUser,
        user,
        setUser,
        LogOut,
        updateUser,
        loading,
        setLoading
    };

    return loading ? <Loading></Loading> : <AuthContext value={userInfo}> {children} </AuthContext>;

}

export default AuthProvider