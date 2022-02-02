import React from 'react';
import { Link } from 'react-router-dom';
import LoginImg from '../../Assests/loginImg.png';
import googleLogo from '../../Assests/googleLogo.png';
import "./Login.css";

const Login = () => {
    return (
        <div className="container login-page mt-3">
			<div className="row">
			    <div className="col-md-6 py-3">
					<div className="text-center">
                    <Link to="/" className="nav-link">
					    <h1 style={{color:"#0b5b8a"}} className="mb-2">Advanced Carpool System</h1>
                    </Link>
					</div>
                    <div>
                        <h3 style={{color:"#0b5b8a"}} className="mt-2">Create an account</h3>
                            <form>
                                <input type="text" className="form-control mt-3 pl-0" placeholder="Name" name="name" />
                                <input type="email" className="form-control mt-3 pl-0" placeholder="Email" name="email" />
                                <input type="password" className="form-control mt-3 pl-0" placeholder="Password" name="password"/>
                                <input type="password" className="form-control mt-3 pl-0" placeholder="Confirm Password" name="confirmPassword"/>
                                
                                <button type="submit" className="btn login-btn btn-block my-3">Create an account</button>
                            </form>
                        </div>
                        <div>
                            <div className="form-divider text-center">
                                <p className="">Or Sign in with social platforms </p>
                            </div>
                            <div className="tg-thirdparty-login mb-3">
                                <button className="btn">
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