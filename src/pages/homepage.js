import React from 'react';
import profile from '../images/profile.jpg'

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
      <p className='bodyText'>I am an upcoming Dartmouth sophomore majoring
        in computer science. I have taken COSC001, COSC010, and COSC050. I am
        proficient in Python, Java, and C.
      </p>
    </div>
  );
};
  
export default Home;