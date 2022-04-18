import React from 'react';
import { Card } from 'react-bootstrap';
import Sharik from "../../Images/about/Sharik.jpg"

const About = () => {
    return (
        <div className='mx-auto w-25 my-4'>
            <Card>
                <Card.Img variant="top" src={Sharik} />
                <Card.Body>
                    <Card.Title className='text-center'>Easrib Sharik</Card.Title>
                    <p>My vission is to be a Full Stack Developer Focused on constant innovation as our key for achieving the ultimate goal of success.The main objective when working as a developer is to be productive and deliver value to the company. As a developer the aim is to build practical applications that will be 100% successful.</p>
                    <p>I have started to learn web development basic by my own from youtube and other resources. But I was feeling that a guided environment is needed to learn it faster. Then I got admitted to Complete Web Development batch-05. With this guided environment I am going towards to achieve my goal.</p>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;