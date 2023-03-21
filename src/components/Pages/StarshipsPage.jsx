import React, { useEffect, useState } from "react";

import MyButton from "../MyButton/MyButton";
import { getStarshipById } from "../../services/sw-service";
import placeholder from "../../assets/image/placeholder.png";
import Loader from "../UI/Loader/Loader";

import "./style.css";

const StarshipsPage = () => {
	const [ship, setShip] = useState({});
	const [id, setId] = useState(9);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			const resp = await getStarshipById(id);
			setShip(resp);
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
								`${ship.image}`
									? `${ship.image}`
									: `${placeholder}`
							}
							alt={ship.name}
							className="image"
							width={400}
							height={400}
						/>
						<div className="info">
							<h3 className="name">{ship.name}</h3>
							<ul className="properties">
								<li>Model: {ship.model}</li>
								<li>Price: {ship.cost_in_credits}</li>
								<li>Length: {ship.length}</li>
								<li>Crew: {ship.crew}</li>
								<li>Passengers: {ship.passengers}</li>
							</ul>
						</div>
					</div>
					<MyButton onClick={() => setId(id + 1)}>Next</MyButton>
				</div>
			)}
		</>
	);
};

export default StarshipsPage;
