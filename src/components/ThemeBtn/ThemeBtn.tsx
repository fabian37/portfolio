import React from 'react';
import './styles/ThemeBtn.scss';
export interface ThemeBtnProps {}

const ThemeBtn: React.FC = () => {
	const handlerTheme = () => {
		const body = document.querySelector('body');
		body?.classList.toggle('dark-theme');
	};
	return (
		<label className="switch">
			<input type="checkbox" onClick={handlerTheme} />
			<span className="slider"></span>
		</label>
	);
};

export default ThemeBtn;
