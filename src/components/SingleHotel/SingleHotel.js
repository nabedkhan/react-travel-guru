import React from 'react';
import { Card, Media } from 'react-bootstrap';
import icon from '../../Images/Icon/star_1_.png';
import './SingleHotel.css';

const SingleHotel = ({ hotel }) => {
    const { img, name, description, price, rating, roomDetails, totalRating } = hotel;
    return (
        <div className="col-lg-4 col-md-6">
            <Card className='mb-4'>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h6>{roomDetails}</h6>
                    <p>{description}</p>
                    <div className="d-flex align-items-center justify-content-between ">
                        <div className="d-flex align-items-center">
                            <img src={icon} alt="" />
                            <h6 className="mb-0 ml-2">{rating} ({totalRating})</h6>
                        </div>
                        <h5>${price}/night</h5>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default SingleHotel;