import './styles/Loader.scss';

const Loader: React.FC = () => {
	return (
		<div className="loader">
			<button data-text="Awesome" className="loader__button">
				<span className="loader__actual-text">&nbsp;{`{FG}`}&nbsp;</span>
				<span className="loader__animation-text" aria-hidden="true">
					&nbsp;{`{FG}`}&nbsp;
				</span>
			</button>
		</div>
	);
};

export default Loader;
