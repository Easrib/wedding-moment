import React from 'react';
import { Form } from 'react-bootstrap';

const Feedback = () => {
    return (
        <div>
            <h2 className='text-center my-4'>Any feedback or Quarries!!!</h2>
            <Form className='w-50 mx-auto mb-2'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <button>Submit</button>
            </Form>
        </div>
    );
};

export default Feedback;