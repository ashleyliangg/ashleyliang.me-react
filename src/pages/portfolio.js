import React from "react";
import { NavLink } from "react-router-dom";
// import posts from '../images/animal-post.png';
// import chatGPT from '../images/skimgpt.png'
import animal from '../images/animal_posts.gif';

const Portfolio = () => {
	let projects = require('../projects.json');
	console.log(projects.chatGPT.name);

	const projectItems = Object.entries(projects).map((project) => {
		console.log(project[1].coverImg);
		return (
			<NavLink key={project[1].name} className="navlink" to={`/portfolio/${project[1].name}`}>
				<div className="projectItem-container">
					<div className="inner-container">
						<img className="projectItem-img" src={project[1].coverImg} alt="project-img" />
						<p className="cover-title projectTitle">{project[1].title}</p>
					</div>
				</div>
			</NavLink>
		);
	});
	return (
		<div className="page center">
			<h1>Some projects I've done</h1>
			<div className="projects-container">
				{projectItems}
			</div>
		</div>
	)
}

export default Portfolio;