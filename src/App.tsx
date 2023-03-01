import './App.scss';
import { Footer, Header } from './components';
import { Home } from './pages';

function App() {
	return (
		<div className="app-container">
			<Header />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
