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
        <div className='page' style={{ textAlign: 'center' }}>
            <div className='pdf-container'>
                {/* <Document 
                    className='resume'
                    file={resumePDF}
                >
                    <Page pageNumber={1} style={{width: '100%'}}/>
                </Document> */}
                <img className='resume-img' src={ resumeIMG } alt='resume' />
            </div>

        </div>
    );
}

export default Resume;