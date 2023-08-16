import React from "react";
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const Project = () => {
	const projName = useParams().project;
	console.log(projName);
	const projects = require('../projects.json');
	console.log(projects[projName]);
	const project = projects[projName];

	const displayMedia = (srcLink) => {
		if (srcLink.slice(0, 24) === "https://www.kapwing.com/") {
			return (
				<iframe className="project-vid" allow="autoplay; gyroscope;" allowfullscreen height="100%" referrerpolicy="strict-origin" src={srcLink} title="Embedded content made on Kapwing" width="100%"></iframe>
			)
		}
		else {
			return (
				<img className="center project-img" src={srcLink} alt="project" />		
			)
		}
	}

	return (
		<div className="page" >
			<NavLink className="navlink" to="/portfolio">
				<div className="back-button">⬅ Back to Projects</div>
			</NavLink>
			<h1 className="center">{project.title}</h1>
			<div className="center-item">
				{displayMedia(project.img)}
			</div>
			<ReactMarkdown className="center">{project.site}</ReactMarkdown>
			<ReactMarkdown>{project.content}</ReactMarkdown>
		</div>
	)
}

export default Project;