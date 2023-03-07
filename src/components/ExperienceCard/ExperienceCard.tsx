import React from 'react';
import './styles/ExperienceCard.scss';
export interface ExperienceCardProps {}

const ExperienceCard: React.FC<ExperienceCardProps> = () => {
	return (
		<>
			<div className="experience">
				<h3 className="experience__title experience__title-job">
					FRONTEND MENTOR at Colegio Técnico Maria Elvinia
				</h3>
				<p className="experience__info">
					<span>August 2022 - Present</span>
					<span>[ Cali, Colombia ]</span>
					<span>[ Technical education in programming, High School ]</span>
				</p>
				<div className="experience__goals">
					<ul className="experience__list">
						<h4 className="experience__title experience__title-goals">
							RESPONSIBILITIES AND KEY ACCOMPLISHMENTS
						</h4>
						<li className="experience__list-item">
							Coach and mentor for over 120 students in frontend technologies
							such as HTML, CSS, and JavaScript.
						</li>
						<li className="experience__list-item">
							Improved study materials and tools to ensure student learning.
						</li>
						<li className="experience__list-item">
							Increased students' interest in the course.
						</li>
						<li className="experience__list-item">
							Over 25 projects developed by students using HTML and CSS.
						</li>
					</ul>
				</div>
			</div>
			<div className="experience">
				<h3 className="experience__title experience__title-job">
					CO-FOUNDER at Effort Design
				</h3>
				<p className="experience__info">
					<span>May 2020 - January 2023</span>
					<span>[ Cali, Colombia ]</span>
					<span>[ Marketing and software development, Freelancer ]</span>
				</p>
				<div className="experience__goals">
					<ul className="experience__list">
						<h4 className="experience__title experience__title-goals">
							RESPONSIBILITIES AND KEY ACCOMPLISHMENTS
						</h4>
						<li className="experience__list-item">
							Increased the number of visitors to the website.
						</li>
						<li className="experience__list-item">
							Layout and design websites that reflect the branding of the
							company.
						</li>
						<li className="experience__list-item">
							Improved SEO of web pages using keywords and relevant content.
						</li>
						<li className="experience__list-item">
							Created data-driven strategic plans focusing on customers.Over 25
							projects developed by students using HTML and CSS.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default ExperienceCard;
