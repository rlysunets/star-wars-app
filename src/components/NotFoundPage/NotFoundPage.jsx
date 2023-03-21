import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const NotFoundPage = () => {
	return (
		<div className="not-found">
			<h1>Sorry, we can not find such page.</h1>
			<Link to="/">Go Home</Link>
		</div>
	);
};

export default NotFoundPage;
