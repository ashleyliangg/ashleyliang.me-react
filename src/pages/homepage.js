import React from 'react';
import python from '../images/python.png';
import java from '../images/java.png';
import c from '../images/c.png';
import react_lang from '../images/react.png';
import ImageSlider from '../components/ImageSlider';
import Grid from '@mui/material/Grid';

const Home = () => {
	const slides = [
		{ url: "../images/profile.jpg", title: "Trip", index: 0 },
		{ url: "../images/gile1.jpg", title: "Gile", index: 1 },
		{ url: "../images/dance1.jpg", title: "Dance", index: 2 },
		{ url: "../images/sunset1.jpg", title: "Sunset", index: 3 },
		{ url: "../images/snow.jpg", title: "Snow", index: 4 },
		{ url: "../images/deer.jpg", title: "Deer", index: 5 },
		{ url: "../images/marmot.jpg", title: "Marmot", index: 6 },
		{ url: "../images/foco.jpg", title: "Foco", index: 7 },
	]

	const slideshowStyle = {
		display: "relative",
		width: "100%",
		height: "500px",
		float: "left",
		margin: "20px 20px 20px 0px"
	}
	return (
		<div className='page'>
			<h1 className='header'>Ashley Liang</h1>
			<Grid container spacing={2}>
				<Grid item xs={12} md={4}>
					<div style={slideshowStyle}>
						<ImageSlider slides={slides} />
					</div>
				</Grid>
				<Grid item xs={12} md={8}>
					<p className='bodyText subtitle'><b>A little bit about me:</b></p>
					<p className='bodyText content'>
						I'm a rising junior at Dartmouth College passionate about development, design, astronomy, healthcare, and new technologies.
						On campus, I'm the director and one of the choreographers for Street Soul, a student-led and student-choreographed dance group. I'm also a residential advisor for the Allen House community
						and occasionally partake in computational research.
						In my free time, I enjoy going on hikes with friends, playing violin and trying new instruments, taking pictures of animals that I come across, and
						admiring sunsets.
					</p>
					<p className='bodyText subtitle'><b>Technical background:</b></p>
					<p className='bodyText content'>I'm a computer science major and a human-centered design minor. Here are some of the courses I've taken!</p>
					<ul className='bodyText remove-bullet content'>
						<li>💡 Full-Stack Web Development</li>
						<li>💡 Intro to UI/UX Design</li>
						<li>💡 Machine Learning and Statistical Data Analysis</li>
						<li>💡 Foundations of Applied Computer Science</li>
						<li>💡 Software Design and Implementation</li>
						<li>💡 Discrete Mathematics in Computer Science</li>
						<li>💡 Problem Solving via Object-Oriented Programming</li>
					</ul>
					<p className='bodyText subtitle'><b>Languages:</b></p>
					{/* images of all languages */}
					<img className="languages" style={{ width: '60px' }} src={python} alt="python logo" />
					<img className="languages" style={{ width: '60px' }} src={java} alt="java logo" />
					<img className="languages" style={{ width: '50px' }} src={c} alt="c language logo" />
					<img className="languages" style={{ width: '40px', margin: '0px 10px 2px 10px' }} src={react_lang} alt="react logo" />

				</Grid>
			</Grid>


		</div>
	);
};

export default Home;