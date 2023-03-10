import React from 'react';
import { ExperienceCard } from '../ExperienceCard';
import './styles/Experience.scss';
import data from '../../data.json';

const Experience: React.FC = () => {
	return (
		<section className="experience-container" id="experience">
			<h2 className="experience-container__title">Where I've Worked</h2>
			{data.experiences.map((job, id) => (
				<ExperienceCard
					key={id}
					title={job.title}
					date={job.date}
					location={job.location}
					field={job.field}
					goals={job.goals}
				/>
			))}
		</section>
	);
};

export default Experience;
