import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-dark p-4 mx-auto text-white text-center'>
            <h2> Copyright &copy; {year} </h2>
        </div>
    );
};

export default Footer;