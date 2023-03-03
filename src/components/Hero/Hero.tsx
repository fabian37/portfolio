import React from 'react';
import './styles/Hero.scss';
export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
	return (
		<>
			<section className="hero-container" id="hero">
				hero
				{/* <h1 className='hero__title'>
					<span className='code'>Hi, my name is</span>
					<span>Fabian Gomez.</span>
					<span className='code'>Frontend Developer</span>
				</h1>
				<p>
					I'm a React.js Developer. I've had the opportunity to teach
					programming to over 120 students, and I was a co-founder of a company
					in the field of marketing and web design with WordPress. I love being
					able to combine my technical skills with creativity and design in my
					projects.
				</p> */}
				<button></button>
			</section>
			<div className='btn-container'>
				<a href="#hero">
					<button className="btn-container__btn-up">↑</button>
				</a>
			</div>
		</>
	);
};

export default Hero;
