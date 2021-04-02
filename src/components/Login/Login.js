import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from '../../firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    })
  
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/"}};
  
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          const { displayName, photoURL, email } = result.user;
          const signedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photoURL: photoURL
          }
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from)
  
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, errorMessage, email, credential);
        });
  
    }
  
    const handleSignedOut = () => {
      firebase.auth().signOut()
        .then(() => {
          const signedOutUser = {
            isSignedIn: false,
            name: '',
            photo: '',
            email: '',
            error: '',
            success: false
          }
          setUser(signedOutUser);
        })
        .catch((error) => {
          console.log('error message', error)
        });
  
    }
  
    const updateUserName = name => {
      const user = firebase.auth().currentUser;
  
      user.updateProfile({
        displayName: name
      }).then(function () {
        console.log('user name updated successfully')
      }).catch(function (error) {
        console.log(error)
      });
    }

    const loginStyle = {
        textAlign: 'center',
        backgroundColor: 'lightgrey',
        boxShadow: '10px 10px 30px black',
        border:'1px solid',
        borderRadius:'10px',
        width: '300px',
        height:'300px',
        marginTop: '50px',
    }

    
  

        return (
            <div class="container" style={loginStyle}>
                <h3>Login</h3>
                {user.isSignedIn ? <button className="btn btn-primary" onClick={handleSignedOut}>Sign out</button> :
                    <button className="btn btn-primary" onClick={handleSignIn}><FontAwesomeIcon icon={faGoogle} /> Continue With Google</button>
                }
                {
                    user.isSignedIn && <div>
                        <p>Welcome, {user.name}</p>
                        <p>Your email :{user.email}</p>
                        <img src={user.photoURL} alt="" />
                    </div>
                }
            </div>
        );
    };

    export default Login;