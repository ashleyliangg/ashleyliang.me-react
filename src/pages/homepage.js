import React from 'react';
import python from '../images/python.png';
import java from '../images/java.png';
import c from '../images/c.png';
import react_lang from '../images/react.png';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const slides = [
    {url: "../images/profile.jpg", title: "Trip", index: 0},
    {url: "../images/gile1.jpg", title: "Gile", index: 1},
    {url: "../images/dance1.jpg", title: "Dance", index: 2},
    {url: "../images/sunset1.jpg", title: "Sunset", index: 3},
    {url: "../images/snow.jpg", title: "Snow", index: 4},
    {url: "../images/deer.jpg", title: "Deer", index: 5},
    {url: "../images/marmot.jpg", title: "Marmot", index: 6},
    {url: "../images/foco.jpg", title: "Foco", index: 7},
  ]

  const slideshowStyle = {
    display: "inline",
    width: "350px",
    height: "500px",
    float: "left",
    marginLeft: "20px",
    marginRight: "30px",
    marginBotton: "20px",
  }
  return (
    <div className='page'>
      <h1 className='header'>Ashley Liang</h1>
      <h3 style={{ textAlign: "center", fontStyle: "italic" }}>
        A Dartmouth student from Kirkland, WA
      </h3>
      <div style={slideshowStyle}>
        <ImageSlider slides={slides} />
      </div>
      {/* <img
        className='profilePic'
        src={profile}
        alt="Ashley Liang"
      /> */}
      <p className='bodyText' style={{marginTop: "10px"}}><b>A little bit about me:</b></p>
      <p className='bodyText'>
        I'm a Dartmouth student excited for her sophomore year. 
        On campus, I'm heavily involved in Street Soul dance group as choreographer and 
        a member of the leadership board. I'm also a freshman residential advisor for the Allen House community. 
        In my free time, I enjoy going on hikes with friends, taking pictures of animals that I come across, and 
        admiring sunsets.
      </p>
      <p className='bodyText'><b>Technical background:</b></p>
      <p className='bodyText'>I have taken or am taking the following technical courses:</p>
        <ul className='bodyText'>
          <li>COSC074: Machine Learning and Statistical Data Analysis</li>
          <li>COSC070: Foundations of Applied Computer Science</li>
          <li>COSC050: Software Design and Implementation</li>
          <li>COSC030: Discrete Mathematics in Computer Science</li>
          <li>COSC010: Problem Solving via Object-Oriented Programming</li>
          <li>COSC001: Introduction to Programming and Computation</li>
        </ul>
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