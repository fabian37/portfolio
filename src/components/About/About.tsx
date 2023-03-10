import React from 'react';
import './styles/About.scss';
import image from '../../assets/me.jpeg';

const About: React.FC = () => {
	return (
		<section className="about-container" id="about">
			<div className="about-info">
				<h2 className="about-info__title">
					About me
				</h2>
				<p>
					Hello! I'm Fabian Gomez, before to my work as a developer, I was a
					co-founder of a company in the field of marketing and web design with
					WordPress. This experience provided me with a deep understanding of
					the importance of creativity and design in building successful
					websites and applications.
				</p>
				<p>
					In addition to my technical skills, I also have a passion for teaching
					programming. I have had the opportunity to teach
					programming to over 120 students. I believe that teaching is a great
					way to solidify one's own understanding of a subject, and I take great
					joy in seeing my students grasp new concepts and develop their own
					programming skills.
				</p>
				<p>
					In my projects, I enjoy exploring different design patterns and
					experimenting with new UI/UX concepts. Whether it's creating a slick
					new animation or implementing a new UI feature, I always strive to
					bring a touch of creativity and design to my work.
				</p>
				<p>Here are a few technologies I've been working with recently:</p>
				<ul className="about-info__list">
					<li className="about-info__list-item">JavaScript</li>
					<li className="about-info__list-item">React.js</li>
					<li className="about-info__list-item">TypeScript</li>
					<li className="about-info__list-item">Sass</li>
					<li className="about-info__list-item">Redux</li>
					<li className="about-info__list-item">WordPress</li>
				</ul>
			</div>
			<div className="about-img">
				<img className="about-img__image" src={image} alt="me" />
				<div className="about-img__decoration"></div>
			</div>
		</section>
	);
};

export default About;
