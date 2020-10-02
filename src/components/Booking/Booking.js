import React, { useContext, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import travelPlace from '../../fakeData/travelPlace';
import './Booking.css';

const Booking = () => {
    const { id } = useParams();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser, bookingInfo, setBookingInfo] = useContext(UserContext);

    const place = travelPlace.find(place => place.id == id);
    const [bookingForm, setBookingForm] = useState({
        origin: '',
        destination: place.name,
        from: '',
        to: ''
    });
    const handleBlur = (e) => {
        const newBookingForm = { ...bookingForm };
        newBookingForm[e.target.name] = e.target.value;
        setBookingForm(newBookingForm);
    }
    const handleSubmit = (e) => {
        history.push('/place');
        setBookingInfo(bookingForm);

        e.preventDefault();
    }

    return (
        <div className='booking'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12">
                        <div className="place-name">
                            <h1>{place.name}</h1>
                            <p>{place.body}</p>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-6 col-md-12">
                        <div className="booking-form">
                            <form onSubmit={handleSubmit} >
                                <label htmlFor="origin">Origin</label>
                                <input type="text" name="origin" onBlur={handleBlur} required />
                                <label htmlFor="destination">Destination</label>
                                <input type="text" name="destination" value={place.name} readOnly />
                                <div className="from">
                                    <label htmlFor="from">From</label>
                                    <input type="date" name="from" onBlur={handleBlur} required />
                                </div>
                                <div className="to">
                                    <label htmlFor="to">To</label>
                                    <input type="date" name="to" onBlur={handleBlur} required />
                                </div>
                                <input type="submit" value="Start Booking" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;