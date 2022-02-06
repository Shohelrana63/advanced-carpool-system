import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import "./Sidebar.css";
import driverImg from "../../Assests/driver.png";

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar mt-5 ml-5">
                <Link to="/" className="sidebar-header">
                   Advanced Carpool System
                </Link>
                <ul className="list-unstyled mt-5">
                    <li>
                        <Link to="/createTrip" className="dashboard-component">
                          <p>Name:{loggedInUser.name}</p>
                        </Link>
                    </li>
                    <li className="mt-2">
                        <Link to="/createTrip" className="dashboard-component">
                         <img style={{width: '35px'}} src={driverImg} alt="" /> <span>Driver</span>
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link to="/myTrips" className="dashboard-component">
                          <img style={{width: '35px'}} src={driverImg} alt="" /> <span>My Trips</span>
                        </Link>
                    </li>
                    <li className="mt-3">
                        <Link to="/bookingTrip" className="dashboard-component">
                          <img style={{width: '35px'}} src={driverImg} alt="" /> <span>User Booking Trip</span>
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default Sidebar;