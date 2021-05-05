import React from 'react';

import './style.css';

const Register = () => (
	<section className="chtoto">
		<h1 className="heading">Введите событие</h1>
		<div className="control-items">
			<input type="text" />
			<button type="button">Добавить</button>
		</div>
		<ul className="event-list">
			<li className="event-unit">
				<span className="event-number">1</span>
				<span className="event-name">Вынести мусор</span>
				<button className="event-delete-button" type="button">
					delete
				</button>
			</li>
		</ul>
	</section>
);

export default Register;
