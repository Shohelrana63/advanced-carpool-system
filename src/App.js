import './App.css';
import {
  BrowserRouter as 
  Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Authentication/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Pages/Authentication/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
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
      </Switch>
    </Router>
    </UserContext.Provider> 
  );
}

export default App;
