import React from 'react';
import { ExperienceCard } from '../ExperienceCard';
import './styles/Experience.scss';
export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = () => {
	return (
		<section className="experience-container" id="experience">
			<h2 className="experience-container__title">Where I've Worked</h2>
			<ExperienceCard />
		</section>
	);
};

export default Experience;
