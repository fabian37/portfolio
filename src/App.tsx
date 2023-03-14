import './App.scss';
import { Footer, Header, Loader } from './components';
import { Home } from './pages';
import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);
	return (
		<div className="app-container">
			{loading ? (
				<Loader />
			) : (
				<>
					<Header />
					<Home />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
