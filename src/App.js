import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Login from './components/Login/Login';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Booking from './components/Booking/Booking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import 'leaflet/dist/leaflet.css';
import Error from './components/Error/Error';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [bookingInfo, setBookingInfo] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, bookingInfo, setBookingInfo]} className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/place">
            <PlaceDetails></PlaceDetails>
          </PrivateRoute>

          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
