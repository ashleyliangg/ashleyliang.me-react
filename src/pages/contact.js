import React from 'react';
import Linkedin from '../images/linkedin.png';
import Mail from '../images/email.png';


const Contact = () => {
    return (
        <div className='page'>
            <h1 className='header'>Contact info</h1>
            <p className='contact'>
                <a href="mailto: lin.ting.liang.25@dartmouth.edu">
                    <img className='logo' src={Mail} alt="Email hyperlink"/>
                </a>
                <a className='hyperlink' style={{fontSize: '20px'}} href="mailto: lin.ting.liang.25@dartmouth.edu"> Email</a>
            </p>
            <p className='contact'>
                <a href="https://www.linkedin.com/in/lin-ting-liang/">
                    <img className='logo' src={Linkedin} alt="LinkedIn hyperlink"/>
                </a>
                <a className='hyperlink' style={{fontSize: '20px'}} href="https://www.linkedin.com/in/lin-ting-liang/"> LinkedIn</a>
            </p>
            
        </div>
    );
};

export default Contact;