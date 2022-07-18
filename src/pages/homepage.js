import React from 'react';
import profile from '../images/profile.jpg'

const profilePic = {
  display: 'inline',
  width: '400px',
  height: 'auto',
  float: 'left',
  margin: '10px'
}

const bodyText = {
  textAlign: 'justify',
  fontSize: '20px'
}

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center"}}>Ashley Liang</h1>
      <h3 style={{ textAlign: "center", fontStyle: "italic" }}>
        A Dartmouth student from Kirkland, WA
      </h3>
      <img
        style={profilePic}
        src={profile}
        alt="Ashley Liang"
      />
      <p style={bodyText}><b>A little bit about me:</b></p>
      <p style={bodyText}>I am an upcoming Dartmouth sophomore majoring
        in computer science. I have taken COSC001, COSC010, and COSC050. I am
        proficient in Python, Java, and C.
      </p>
    </div>
  );
};
  
export default Home;