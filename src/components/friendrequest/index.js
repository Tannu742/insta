import React from 'react';

const Request = ({ img, name, para, btn }) => {
    return (
        <div className='row align-items-center'>
            <div className='col'>
                <img src={img} alt="" />
            </div>
            <div className='col'>
                <span>{name}</span>
                <p>{para}</p>
            </div>
            <div className='col'>
                <a href="/">{btn}</a>
            </div>
        </div>
    );
}

export default Request;
