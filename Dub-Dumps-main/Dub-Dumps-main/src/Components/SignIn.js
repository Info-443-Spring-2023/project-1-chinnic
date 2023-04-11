import React from 'react';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { GoogleAuthProvider, EmailAuthProvider, getAuth } from 'firebase/auth'

const FIREBASEUI_CONFIG = {
    signInOptions: [ //array of which signin options to use 
        { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }, //provider with opti
        GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/home',
    signInFlow: 'popup', //show popup to log in 
    credentialHelper: 'none', //don't show an account chooser 
};

export default function SignIn(props) {
    const auth = getAuth();

    if (props.currentUser.userId) {
        return (
            <div className="signin-ui my-4">
                <h2 className="page-header">You are already logged in!</h2>
                <p className="lead">Welcome, {props.currentUser.displayName}!</p>
            </div>
        )
    } else {
        return (
            <div className="signin-ui my-4">
                <div className="signin-content">
                    <h2 className="page-header">Sign in here!</h2>
                    <p className="lead">Start rating your favorite bathrooms!</p>
                    <StyledFirebaseAuth uiConfig={FIREBASEUI_CONFIG} firebaseAuth={auth} />
                </div>
            </div>
        )
    }
}