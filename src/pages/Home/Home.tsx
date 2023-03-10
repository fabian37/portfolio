import { About, Contact, Experience, Hero, Projects } from '@/components';
import React from 'react';
import './styles/Home.scss';

const Home: React.FC = () => {
	return (
		<main className="home">
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</main>
	);
};

export default Home;
