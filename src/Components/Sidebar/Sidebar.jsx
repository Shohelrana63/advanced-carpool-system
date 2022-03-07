import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
import "./Sidebar.css";
import driverImg from "../../Assests/driver.png";
import userImg from "../../Assests/user.png";

const Sidebar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const user = localStorage.getItem('user');
    const userType = localStorage.getItem('userType');
    return (
        <div className="sidebar mt-5 ml-5">
                <Link to="/" className="sidebar-header">
                   Advanced Carpool System
                </Link>
                <ul className="list-unstyled mt-5">
                    {/* <li>
                        <p>Name:{user.name}</p>
                        
                    </li> */}
                    {
                        userType === "driver" &&
                       <>
                       <li>
                           <p>Driver</p>
                        </li>
                        <li className="mt-2">
                            <Link to="/createTrip" className="dashboard-component">
                            <img style={{width: '35px'}} src={driverImg} alt="" /> <span style={{fontWeight: 'bold'}}>Driver</span>
                            </Link>
                        </li>
                        <li className="mt-3">
                            <Link to="/myTrips" className="dashboard-component">
                            <img style={{width: '35px'}} src={driverImg} alt="" /> <span style={{fontWeight: 'bold'}}>My Trips</span>
                            </Link>
                        </li>
                       </>
                    }
                   {
                       userType === 'user' &&
                    <>
                       <li>
                           <p>user</p>
                       </li>
                       <li className="mt-3">
                            <Link to="/bookingTrip" className="dashboard-component">
                                <img style={{width: '35px'}} src={userImg} alt="" /> <span style={{fontWeight: 'bold'}}>User Booking Trip</span>
                            </Link>
                       </li>
                   </>  
                   }
                </ul>
        </div>
    );
};

export default Sidebar;