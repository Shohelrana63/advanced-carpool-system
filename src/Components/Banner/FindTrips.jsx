import React from 'react';
import { useHistory } from 'react-router-dom';
import done from "../../Assests/done.png";
const FindTrips = ({tripsData}) => {
    const user = JSON.parse(localStorage.getItem('user'));
console.log("tripsData: " , tripsData);
const history = useHistory();
    const handleBtn = () => {
        if(user){
            fetch(`http://localhost:8000/confirmed/${tripsData._id}`, {
			method: 'PUT',
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify({uid: user.uid})
		})
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
		.catch((err) => {
            console.log(err);
		});
         }
         else{
             history.replace("/login")
         } 
    }
    return (
        <div className="col-md-6 findTrips">
            <div class="card mt-5 mb-3">
                    <div class="card-header">Trip Details</div>
                    <div class="card-body">
                        <div className="row">
                        <div className="col-md-3">
                                <h6 class="card-title">Car Name</h6>
                                <p>{tripsData.carName}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Car Model Number</h6>
                                <p>{tripsData.carModelNumber}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Start Location</h6>
                                <p>{tripsData.startLocation}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Destination</h6>
                                <p>{tripsData.destination}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Fare</h6>
                                <p>{tripsData.fare}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Seat</h6>
                                <p>{tripsData.seat}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Can Smoke</h6>
                                <p>{tripsData.smoke}</p>
                            </div>
                            <div className="col-md-3">
                                <h6 class="card-title">Allow Children</h6>
                                <p>{tripsData.children}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-3 findTrip">
                    <button onClick={handleBtn} type="submit" className="btn" 
                    data-bs-toggle="modal" data-bs-target="#exampleModal">Confirm Trip</button>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="text-center  py-5 my-5">
                            <img src={done} style={{ fontSize: '5em' }} alt="" />
                            <h4 className="mt-5 lead">Your Trip is Confrim!</h4>
                            <p className="mt-5 px-3">
                                Please go to Dashboard and Login with your email which you provided into booking trip to view details.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default FindTrips;