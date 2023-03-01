import { About, Hero, Projects } from '@/components';
import React from 'react';
import './styles/Home.scss';
export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div className="home">
			Este es el home
			<Hero />
			<About />
			<Projects />
		</div>
	);
};

export default Home;
