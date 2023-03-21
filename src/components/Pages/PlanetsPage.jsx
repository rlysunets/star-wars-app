import React, { useEffect, useState } from "react";

import MyButton from "../MyButton/MyButton";
import { getPlanetById } from "../../services/sw-service";
import placeholder from "../../assets/image/placeholder.png";
import Loader from "../UI/Loader/Loader";

import "./style.css";

const PlanetsPage = () => {
	const [planet, setPlanet] = useState({});
	const [id, setId] = useState(2);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			const resp = await getPlanetById(id);
			setPlanet(resp);
			setIsLoading(false);
		}
		fetchData();
	}, [id]);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<div className="content">
						<img
							src={
								`${planet.image} `
									? `${planet.image}`
									: `${placeholder}`
							}
							alt={planet.name}
							className="image"
							width={400}
							height={400}
						/>
						<div className="info">
							<h3 className="name">{planet.name}</h3>
							<ul className="properties">
								<li>Diameter: {planet.diameter}</li>
								<li>Gravity: {planet.gravity}</li>
								<li>Population: {planet.population}</li>
								<li>Climate: {planet.climate}</li>
								<li>Terrain: {planet.terrain}</li>
							</ul>
						</div>
					</div>
					<MyButton onClick={() => setId(id + 1)}>Next</MyButton>
				</div>
			)}
		</>
	);
};

export default PlanetsPage;
