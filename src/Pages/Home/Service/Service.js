import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    }

    const { name, price, img, description } = service;
    return (
        <Card className='m-4 col-lg-3'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{description}</p>
                <p>Price: ${price}</p>
            </Card.Body>
            <button onClick={handleCheckout}>Book The Service</button>
        </Card>
    );
};

export default Service;