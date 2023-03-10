import React from 'react';
import './styles/Projects.scss';
import data from '../../data.json';
import Project from '../Project/Project';

const Projects: React.FC = () => {
	return (
		<section className="projects-container" id="projects">
			<h2 className="projects-container__title">Some Things I've Built</h2>
			<ul className="projects-container__list">
				{data.projects.map((project, id) => (
					<Project
						key={id}
						title={project.title}
						image={project.image}
						description={project.description}
						technologies={project.technologies}
						deploy={project.deploy}
						repository={project.repository}
					/>
				))}
			</ul>
		</section>
	);
};

export default Projects;
