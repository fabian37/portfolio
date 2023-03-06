import React from 'react';
import './styles/Hero.scss';
export interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
	return (
		<>
			<section className="hero-container" id="hero">
				<h1 className="hero__title">
					<span className="hero__title hero__title--code">Hi, my name is</span>
					<span>Fabian Gomez.</span>
					<span className="hero__title hero__title--subtitle">
						Let's build the future.
					</span>
				</h1>
				<p>
					I'm a React.js Developer. I have had the opportunity to teach
					programming to over 120 students. My experience as a React.js
					developer and programming teacher has given me a deep appreciation for
					the intersection of technical skills, creativity, and design. I
					believe that these three elements are essential for creating truly
					great software, and I'm always excited to explore new ways to bring
					them together in my work.
				</p>
				<button className="btn">
					<a href="#contact">Contact me</a>
				</button>
			</section>
			<div className="btn-container">
				<a href="#hero">
					<button className="btn-container__btn-up">↑</button>
				</a>
			</div>
		</>
	);
};

export default Hero;
