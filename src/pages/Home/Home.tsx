import { About, Contact, Experience, Hero, Projects } from '@/components';
import React from 'react';
import './styles/Home.scss';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className="home">
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Contact />
		</div>
	);
};

export default Home;
