import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './PlaceDetails.css';
import hotelData from '../../fakeData/hotelData';
import SingleHotel from '../SingleHotel/SingleHotel';
import { Map, CircleMarker, Popup, TileLayer } from 'react-leaflet';
import { latiAndLongitudeData } from '../../fakeData/latiAndLongitudeData';


const PlaceDetails = () => {
    const [loggedInUser, setLoggedInUser, bookingInfo] = useContext(UserContext);
    const { destination, origin, from, to } = bookingInfo;
    const hotelList = hotelData.filter(hotel => hotel.place === destination.toLowerCase());
    const center = latiAndLongitudeData.filter(place => place.name === destination.toLowerCase());

    return (
        <div className="place-details">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className=" mt-5">{destination} Map Area</h2>
                        <hr />
                        <div className="map">
                            <Map center={[center[0].latitude, center[0].longitude]} zoom={7}>
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                                />
                                <CircleMarker
                                    radius={40}
                                    center={[center[0].latitude, center[0].longitude]}>
                                    <Popup>
                                        <div>{center[0].name}</div>
                                    </Popup>
                                </CircleMarker>
                            </Map>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="hotel-info mt-5">
                            <p className="mb-1">From: {from} - To: {to}</p>
                            <h2>Stay in {destination}</h2>
                            <hr />
                            <div className="row">
                                {
                                    hotelList.map(hotel => <SingleHotel hotel={hotel} key={hotel.id}></SingleHotel>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default PlaceDetails;