import React from 'react';
// import EmailLink from '../components/pageElements/email';
// import Hyperlink from '../components/pageElements/hyperlink';

const hyperlink = {
    color: '#2ad4a0',
    textDecoration: 'none',
    fontWeight: 'bold',
}

const Contact = () => {
    return (
        <div className='page'>
            <h1 className='header'>Contact info</h1>
            <p className='bodyText' style={{textAlign: 'center'}}>
                Get in touch with me through 
                <a style={hyperlink} href="mailto: lin.ting.liang.25@dartmouth.edu"> email </a>
                 or 
                <a style={hyperlink} href="https://www.linkedin.com/in/lin-ting-liang/"> LinkedIn</a>
                .
            </p>
        </div>
    );
};

export default Contact;