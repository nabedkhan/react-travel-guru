import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import travelPlace from '../../fakeData/travelPlace';
import './Banner.css';


const Banner = () => {
    const [id, setId] = useState(1);
    const place = travelPlace.find(place => place.id === id);

    return (
        <div className="banner-area">
            <div className='container'>
                <div className="row">
                    <div className="col-xl-5 col-md-12">
                        <div className="banner-text">
                            <h1>{place.name}</h1>
                            <p>{place.body}</p>
                            <Link to={`/booking/${place.id}`}>Booking</Link>
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-12">
                        <div className="row mt-xl-5 pt-xl-4">
                            {
                                travelPlace.map(place =>
                                    <div
                                        className="col-md-6 mt-4"
                                        key={place.id}>
                                        <button
                                            className='single-place m-3'
                                            onClick={() => setId(place.id)}
                                        >
                                            <img
                                                src={place.img}
                                                className='img-fluid'
                                                alt="" />

                                            <h3>{place.name}</h3>
                                        </button>
                                    </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;