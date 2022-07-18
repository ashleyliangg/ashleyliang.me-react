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
        <div>
            <h1>Contact info</h1>
            <p>
                Get in touch with me through 
                <a style={hyperlink} href="mailto: lin.ting.liang.25@dartmouth.edu"> email </a>
                 or 
                <a style={hyperlink} href="https://www.linkedin.com/in/lin-ting-liang/"> LinkedIn</a>
                .
            </p>
            {/* <Text>
                Get in touch with me through 
                <EmailLink label="email" mailto="mailto:lin.ting.liang.25@dartmouth.edu" />
                and
                <Hyperlink label="LinkedIn" url="https://www.linkedin.com/in/lin-ting-liang/" />
            </Text>   */}
        </div>
    );
};

export default Contact;