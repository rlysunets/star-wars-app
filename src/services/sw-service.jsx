import axios from "axios";

const REACT_APP_DATA_URL = "https://www.swapi.tech/api";
const REACT_APP_IMAGE_BASE_URL = "https://starwars-visualguide.com/assets/img";

export const getPersonById = async (id) => {
	const response = await axios.get(`${REACT_APP_DATA_URL}/people/${id}`);
	response.data.result.properties.image = `${REACT_APP_IMAGE_BASE_URL}/characters/${id}.jpg`;
	return response.data.result.properties;
};

export const getPlanetById = async (id) => {
	const response = await axios.get(`${REACT_APP_DATA_URL}/planets/${id}`);
	response.data.result.properties.image = `${REACT_APP_IMAGE_BASE_URL}/planets/${id}.jpg`;
	return response.data.result.properties;
};

export const getStarshipById = async (id) => {
	const response = await axios.get(`${REACT_APP_DATA_URL}/starships/${id}`);
	response.data.result.properties.image = `${REACT_APP_IMAGE_BASE_URL}/starships/${id}.jpg`;
	return response.data.result.properties;
};
