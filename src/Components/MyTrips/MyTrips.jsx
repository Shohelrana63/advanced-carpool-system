import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./MyTrips.css";
import MyTripsData from './MyTripsData';

const MyTrips = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [ myTrips, setMyTrips ] = useState([]);
    console.log("myTrips", myTrips);
    useEffect(() => {
			fetch(`http://localhost:8000/myTrips/${user.uid}`)
				.then((res) => res.json())
				.then((data) =>
                    setMyTrips(data))
            },[]);

    return (
        <div className="myTrips container row">
            <div className="col-md-4">
			    <Sidebar />
			</div>
            <div className="col-md-8 mt-5">
                <div className="d-flex justify-content-between mb-4">
                    <h3 className="ml-md-5 mb-0">My Trips</h3>
					<p>Name</p>
                </div>
                <div className="myTrips-card">
                {
                   myTrips.map(tripsData =>
                        <MyTripsData tripsData={tripsData}
                            key={tripsData._id}></MyTripsData>)
                }
              </div>
            </div>
        </div>
    );
};

export default MyTrips;