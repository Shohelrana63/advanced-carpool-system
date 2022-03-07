import './App.css';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login';
// import { createContext, useState } from 'react';
import PrivateRoute from './Pages/Authentication/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import DriverCreateTrip from './Components/DriverCreateTrip/DriverCreateTrip';
import MyTrips from './Components/MyTrips/MyTrips';
import BookingTrip from './Components/BookingTrip/BookingTrip';

// export const UserContext = createContext();
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/createTrip">
          <DriverCreateTrip />
        </PrivateRoute>
        <PrivateRoute path="/myTrips">
          <MyTrips />
        </PrivateRoute>
        <PrivateRoute path="/bookingTrip">
          <BookingTrip />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
