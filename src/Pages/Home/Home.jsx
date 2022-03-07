import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Navbar from '../../Components/Navbar/Navbar';
import "./Home.css";
const Home = () => {
    return (
        <div className="home-background">
            <Navbar/>
            <Banner/>
        </div>
    );
};

export default Home;