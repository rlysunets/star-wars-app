import React, { useEffect, useState } from "react";

import MyButton from "../MyButton/MyButton";
import { getPersonById } from "../../services/sw-service";
import placeholder from "../../assets/image/placeholder.png";
import Loader from "../UI/Loader/Loader";

import "./style.css";

const PeoplePage = () => {
	const [person, setPerson] = useState({});
	const [id, setId] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		async function fetchData() {
			const resp = await getPersonById(id);
			setPerson(resp);
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
							className="image"
							src={
								`${person.image}`
									? `${person.image}`
									: `${placeholder}`
							}
							alt={person.name}
							width={300}
							height={400}
						/>
						<div className="info">
							<h3 className="name">{person.name}</h3>
							<ul className="properties">
								<li>Birth year: {person.birth_year}</li>
								<li>Gender: {person.gender}</li>
								<li>Height: {person.height}</li>
								<li>Skin color: {person.skin_color}</li>
								<li>Eye color: {person.eye_color}</li>
							</ul>
						</div>
					</div>
					<MyButton onClick={() => setId(id + 1)}>Next</MyButton>
				</div>
			)}
		</>
	);
};

export default PeoplePage;
