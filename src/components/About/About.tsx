import React from 'react';
import './styles/About.scss';
export interface AboutProps {}

const About: React.FC<AboutProps> = () => {
	return (
		<section className="about-container" id="about">
			About
		</section>
	);
};

export default About;
