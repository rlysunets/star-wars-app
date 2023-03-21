import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./style.css";

const Layout = () => {
	return (
		<>
			<div className="wrapper">
				<header className="header">
					<p className="logo">starwars</p>

					<NavLink to="/">People</NavLink>
					<NavLink to="/planets">Planets</NavLink>
					<NavLink to="/starships">Starships</NavLink>
				</header>

				<div className="container">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default Layout;
