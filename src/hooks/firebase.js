import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuth from "../Firebase/firebase.init";

initAuth();
const useFirebase = () => {
    const [user, setuser] = useState({})
    const [isLoading, setisLoading] = useState(true);


    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    // creating user first time with email pass
    const createUser = (name, email, password) => {
        setisLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setuser(userCredential.user);
                // ...
                setName(name);
                window.location.reload()
            })
            .catch((error) => {

            }).finally(() => {
                setisLoading(false)

            });

    };
    const setName = (name) => {
        setisLoading(true)

        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { });
    }
    // google sign
    const googleSign = () => {
        setisLoading(true)
        return signInWithPopup(auth, provider)
    }
    //Login with email pass
    const loginPass = (email, password) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setuser(userCredential.user);

            })
            .catch((error) => {
            }).finally(() => {
                setisLoading(false)

            });
    }
    // AUTH CHANGE
    useEffect(() => {
        setisLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setuser(user);

            } else {
                setuser({})
            }
            setisLoading(false)
        });
    }, [])
    // SIGN OUT
    const logOut = () => {
        setisLoading(true)
        signOut(auth).then(() => {
            setuser({})
        }).catch((error) => {
            // An error happened.
        }).finally(() => {
            setisLoading(false)

        });
    }
    return {
        user,
        setisLoading,
        isLoading,
        createUser,
        loginPass,
        logOut,
        googleSign
    }
}
export default useFirebase;