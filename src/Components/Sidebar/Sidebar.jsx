import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UserContext } from '../../App';
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="sidebar mt-5 ml-5">
        <Link to="/" className="sidebar-header">
          <h1>{loggedInUser.name}</h1>
        </Link>
        <ul className="list-unstyled mt-5 mr-3">
          <li>
            <Link to="/driver">
              <span>Driver</span>
            </Link>
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;