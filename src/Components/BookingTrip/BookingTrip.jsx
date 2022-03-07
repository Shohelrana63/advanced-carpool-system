import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./BookingTrip.css";
import BookingTripDetail from './BookingTripDetail';
const BookingTrip = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [ bookingTrip, setBookingTrip ] = useState([]);
    console.log("bookingTrip", bookingTrip);
    useEffect(() => {
			fetch(`http://localhost:8000/bookingDetails/${user.uid}`)
				.then((res) => res.json())
				.then((data) =>
                setBookingTrip(data))
            },[]);
    return (
        <div className="bookingTrip container row">
            <div className="col-md-4">
			    <Sidebar />
			</div>
            <div className="col-md-8 mt-5">
                <div className="d-flex justify-content-between mb-4">
                    <h3 className="ml-md-5 mb-0">Booking Trip</h3>
					<p>User</p>
                </div>
                <div>
                <div className="myTrips-card">
                {
                   bookingTrip.map(bookingData =>
                        <BookingTripDetail bookingData={bookingData}
                            key={bookingData._id}></BookingTripDetail>)
                }
              </div>
                </div>
            </div>
        </div>
    );
};

export default BookingTrip;