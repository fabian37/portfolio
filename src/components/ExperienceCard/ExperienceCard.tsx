import React from 'react';
import './styles/ExperienceCard.scss';

export interface ExperienceCardProps {
	title: string;
	date: string;
	location: string;
	field: string;
	goals: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
	title,
	date,
	location,
	field,
	goals,
}) => {
	return (
		<>
			<div className="experience">
				<h3 className="experience__title experience__title-job">{title}</h3>
				<p className="experience__info">
					<span>{date}</span>
					<span>{location}</span>
					<span>{field}</span>
				</p>
				<div className="experience__goals">
					<ul className="experience__list">
						<h4 className="experience__title experience__title-goals">
							RESPONSIBILITIES AND KEY ACCOMPLISHMENTS
						</h4>
						{goals.map((goal, id) => (
							<li key={id} className="experience__list-item">
								{goal}
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default ExperienceCard;
