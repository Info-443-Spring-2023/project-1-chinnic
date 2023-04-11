import { getAuth, signOut } from 'firebase/auth';
import React from 'react'; //import React Component
import { Link } from 'react-router-dom';



export default function Header(props) {
    const handleSignOut = (evt) => {
        signOut(getAuth());
    }

    let buttonToShow = ''
    if (!props.currentUser.userId) {
        buttonToShow = <Link to="/signin" className="btn btn-warning signin-btn signin">Sign in</Link>
    } else {
        let profilePic = props.currentUser.photoURL;
        if (profilePic === null) {
            profilePic = "../img/defaultpic.jpg";
        }
        buttonToShow =
            <div className="signOut my-auto">
                <img src={profilePic} alt="profile picture" referrerPolicy='no-referrer' className='profilePic' ></img>
                <button className="btn btn-warning signin-btn signout" onClick={handleSignOut}>Sign out</button>
            </div>
    }

    return (
        <header className="home-header">
            <div className="header-flex px-1 py-1">
                <img src="img/logo.png" alt="Dub Dumps logo" className="logo my-2" />
                <Link to="/home" className='homeLink'>
                    <h1 className="dub-dumps my-2">DUB DUMPS</h1>
                </Link>
                {buttonToShow}
            </div>
        </header>
    )
}