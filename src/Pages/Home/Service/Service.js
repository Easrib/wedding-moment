import React from 'react';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {

    const { name, price, img } = service;
    return (
        <div>

            <Card className='m-4'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>{price}</p>
                </Card.Body>
                <button>Book The Service</button>
            </Card>
        </div>
    );
};

export default Service;