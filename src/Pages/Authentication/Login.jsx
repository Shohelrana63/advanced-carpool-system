import React, { useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import LoginImg from '../../Assests/loginImg.png';
import googleLogo from '../../Assests/googleLogo.png';
import "./Login.css";
import initializeAuthentication from './firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useState } from 'react';

const Login = () => {
    const[newUser, setNewUser] = useState(false);
    const[user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        userType: '',
    });
    console.log("user", user.userType);
   
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard" } };
    
    const[error, setError] = useState("");
    // const [ currentUser, setCurrentUser ] = useState({
	// 	isSignedIn: false,
	// 	name: '',
	// 	email: '',
	// 	password: '',
	// 	error: '',
	// 	success: false
	// });

    initializeAuthentication();
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleFormToggle = () => {
		setNewUser(!newUser);
	};

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then ((result) => {
          const {displayName, email} = result.user;
          console.log("user", displayName, email);
          const newUser = {
              isSignedIn: true,
              name: displayName,
              email: email
          }
          setUser(newUser);
        //   setLoggedInUser(newUser);
          history.replace(from);
          console.log(newUser);
        })
        .catch((error) => {
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            console.log(error);
        })
    }

    //email,password validation
    
    const handleBlur = (e) => {
        let isFormVaild = true;
        if (e.target.name === 'email') {
          isFormVaild = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber = /\d{1}/.test(e.target.value);
          isFormVaild = isPasswordValid && passwordHasNumber
        }
        if (isFormVaild) {
          const newUserInfo = { ...user };
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }
    
    //email,password createUserWithEmailAndPassword
    const handleRegistration = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((result) => {
            console.log("resultUser", result.user);
            const {displayName, email} = result.user;
            console.log("user", displayName, email);
            const newUser = {
                isSignedIn: true,
                name: user.name || displayName,
                email: email
            }
          updateUser(user.name);
          setError('');
          setUser(newUser);
          console.log("userTYPE", user.userType);
          localStorage.setItem("userType",user.userType);
          localStorage.setItem("user", JSON.stringify(result.user));
          history.replace(from);
        })
        .catch(error => {
            const newUser = {...user};
            newUser.error = error.message;
            newUser.success = false;
            setUser(newUser);
            console.log(error);
        })
    }
    
    //email,password signInWithEmailAndPassword
    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((result) => {
            console.log(result.user);
            const {displayName, email} = result.user;
            console.log("user", displayName, email);
            const newUser = {
                isSignedIn: true,
                name: displayName,
                email: email
            }
          setError('');
          setUser(newUser);
          localStorage.setItem("userType",user.userType);
          localStorage.setItem("user", JSON.stringify(result.user));
          history.replace(from);
        })
        .catch(error =>{
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
          console.log(error);
        })
    }
    //update updateProfile
    const updateUser = (name) => {
        console.log("auth.currentUser", auth.currentUser);
        updateProfile(auth.currentUser, {
            displayName: name,
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    return (
        <div className="container login-page mt-3">
			<div className="row">
			    <div className="col-md-6 py-3">
					<div className="text-center">
                    <Link to="/" className="nav-link">
					    <h2 style={{color:"#0b5b8a"}} className="mb-2">Advanced Carpool System</h2>
                    </Link>
					</div>
                    {newUser ? (
                    <div>
                        <h4 style={{color:"#0b5b8a"}} className="mt-2">Create an account</h4>
                            <form onSubmit={handleRegistration}>
                                <input onBlur={handleBlur} type="text" className="form-control mt-3 pl-0" placeholder="Name" name="name" required/>
                                <input onBlur={handleBlur} type="email" className="form-control mt-3 pl-0" placeholder="Email" name="email" required/>
                                <input onBlur={handleBlur} type="password" className="form-control mt-3 pl-0" placeholder="Password" name="password" required/>
                                <span className="text-danger">{error}</span>
                                <input onBlur={handleBlur} type="password" className="form-control mt-3 pl-0" placeholder="Confirm Password" name="confirmPassword" required/>
                                <input onBlur={handleBlur} type="text" className="form-control mt-3 pl-0" placeholder="user type" name="userType" required/>
                                <button type="submit" className="btn login-btn btn-block my-3">Create an account</button>
                            </form>
                            
                            <div className="register-login">
                                Already have an account?
                                <button className="btn btn-logintoggle ml-2" onClick={handleFormToggle}>
                                    Login
                                </button>
			                </div>
                        </div>
                    ) : (
                        <div>
                        <h4 style={{color:"#0b5b8a"}} className="mt-2">Log in</h4>
                            <form onSubmit={handleSignIn}>
                                <input onBlur={handleBlur} type="email" className="form-control mt-3 pl-0" placeholder="Email" name="email" required/>
                                <input onBlur={handleBlur} type="password" className="form-control mt-3 pl-0" placeholder="Password" name="password" required/>
                                <input onBlur={handleBlur} type="text" className="form-control mt-3 pl-0" placeholder="user type" name="userType" required/>
                                <span className="text-danger">{error}</span>

                                <button type="submit" className="btn login-btn btn-block my-3">Log in</button>
                            </form>
                            <div className="register-login" onClick={handleFormToggle}>
                            Don’t have an account?
                                <button className="btn btn-logintoggle ml-2">
                                Create an account
                                </button>
			                </div>
                        </div>
                    )}
                        <div>
                            <div className="form-divider text-center">
                                <p className="">Or Sign in with social platforms </p>
                            </div>
                            <div className="tg-thirdparty-login mb-3">
                                <button className="btn" onClick={handleGoogleSignIn}>
                                    <span>
                                        <img src={googleLogo} style={{ maxWidth: "32px" }} alt="google logo" />
                                    </span>
                                    <span>Continue with Google</span>
                                </button>
                            </div>
                        </div>
                </div>

				<div className="col-md-6 mt-5">
					<img className="img-fluid mt-5 ml-4" src={LoginImg} alt="login-img" />
				</div>
			</div>
		</div>
    );
};

export default Login;