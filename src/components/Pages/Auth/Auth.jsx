import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Members = () => (
	<section>
		<h1 className="main-page">Главная</h1>
		<Link to="/reg">Ночац штоле</Link>
	</section>
);

export default Members;
