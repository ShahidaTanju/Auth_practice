import React, { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firebase.Init';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {


    const authUser = "Tanju";

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const gitHubLogIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const authInfo = {
        authUser, googleLogIn, gitHubLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;