import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./MyTrips.css";
const MyTrips = () => {
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
                <div class="card border-info mt-5 mb-3">
                    <div class="card-header">Trip Details</div>
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-3">
                                <h5 class="card-title">Start Location</h5>
                                <p>Dhaka</p>
                            </div>
                            <div className="col-md-3">
                                <h5 class="card-title">Destination</h5>
                                <p>Barisal</p>
                            </div>
                            <div className="col-md-3">
                                <h5 class="card-title">Fare</h5>
                                <p>100</p>
                            </div>
                            <div className="col-md-3">
                                <h5 class="card-title">Seat</h5>
                                <p>3</p>
                            </div>
                            <div className="col-md-3">
                                <h5 class="card-title">Can Smoke</h5>
                                <p>No</p>
                            </div>
                            <div className="col-md-3">
                                <h5 class="card-title">Allow Children</h5>
                                <p>Yes</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default MyTrips;