import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services'>
            <h2 className='text-center'>My Services</h2>
            <CardGroup className='m-4'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </CardGroup>
        </div>
    );
};

export default Services;