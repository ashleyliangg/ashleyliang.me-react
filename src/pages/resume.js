import React from 'react';
import resumeIMG from '../images/resume.jpg';

/**
 * COMMENTED OUT PORTION FROM ATTEMPT TO EMBED PDF: poor quality when enlarging it on website,
 * keeping the old code to try to work it out later
 **/
// import resumePDF from '../images/resume.pdf';
// import { Document, Page, pdfjs } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <div className='page' style={{textAlign: 'center'}}>
            <h1 className='header'>Resume</h1>
            <p className='bodyText' style={{textAlign: 'center'}}>
                <i>
                *If the resume isn't showing up below, it can also be found as a google drive PDF
                <a className='hyperlink' href="https://drive.google.com/file/d/18e8mhCWqqYPOPZ9rK_14-d-Gpi4nZBlW/view?usp=sharing"> here</a>
                .*
                </i>
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* <Document 
                    className='resume'
                    file={resumePDF}
                >
                    <Page pageNumber={1} style={{width: '100%'}}/>
                </Document> */}
                <img src={resumeIMG} style={{width: '80vw', height: 'auto'}}/>
            </div>

        </div>
    );
}

export default Resume;