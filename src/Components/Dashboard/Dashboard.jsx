import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <div className="dashboard container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Dashboard;