import React from 'react';
import profile from '../images/profile.jpg';
import python from '../images/python.png';
import java from '../images/java.png';
import c from '../images/c.png';
import react_lang from '../images/react.png';

const Home = () => {
  return (
    <div className='page'>
      <h1 className='header'>Ashley Liang</h1>
      <h3 style={{ textAlign: "center", fontStyle: "italic" }}>
        A Dartmouth student from Kirkland, WA
      </h3>
      <img
        className='profilePic'
        src={profile}
        alt="Ashley Liang"
      />
      <p className='bodyText'><b>A little bit about me:</b></p>
      <p className='bodyText'>
        I'm a Dartmouth student excited for her sophomore year. 
        On campus, I'm heavily involved in Street Soul dance group as choreographer and 
        a member of the leadership board. I'm also a freshman residential advisor and
        enjoy computational astronomy research, where I investigate hydrogen
        densities across astrospheres. I'm also involved in Dartmouth Chamber Orchesta
        and Women in Computer Science (WiCS).
      </p>
      <p className='bodyText'><b>Technical background:</b></p>
      <p className='bodyText'>I have taken COSC070: Foundations of Applied Computer Science,
        COSC050: Software Design and Implementation, COSC010: Problem Solving via Object-Oriented Programming, and COSC001: Introduction to Programming and Computation.
      </p>
      <p className='bodyText'>
        <b>Languages:</b>
        {/* images of all languages */}
        <img style={{width: '60px', height: 'auto'}} src={python} alt="python logo"/>
        <img style={{width: '60px', height: 'auto'}} src={java} alt="java logo"/>
        <img style={{width: '50px', height: 'auto'}} src={c} alt="c language logo"/>
        <img style={{width: '40px', height: 'auto', margin: '0px 10px'}} src={react_lang} alt="react logo"/>
      </p>
    </div>
  );
};
  
export default Home;