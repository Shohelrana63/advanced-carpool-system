import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("user", user);
    const handleLogOut = () =>{
        localStorage.removeItem('user')
        //autoreload
        window.location.reload(false);
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <h1 style={{color:"#0b5b8a", fontWeight: "bold"}}>Advanced Carpool System</h1>
                    </Link>
                    <button className="navbar-toggler" type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                        </ul>
                            { user ?
                            <div className="d-flex">
                            <p  style={{marginTop: "14px", marginLeft:"10px", fontWeight: "bold"}}>{user.displayName}</p>
                            <button  style={{marginLeft:"15px", fontWeight: "bold"}} className="btn login-btn" onClick={handleLogOut}>Log Out</button>
                            </div>
                            : 
                            <Link className="nav-link active" to="/login">
                               <button className="btn login-btn">Log In</button>
                            </Link>
                             }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;