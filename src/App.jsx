import { Route, Routes } from "react-router-dom";

import PeoplePage from "./components/Pages/PeoplePage";
import Layout from "./components/Layout/Layout";
import StarshipsPage from "./components/Pages/StarshipsPage";
import PlanetsPage from "./components/Pages/PlanetsPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Particle from "./components/Particle/Particle";

import "./App.css";

function App() {
	return (
		<>
			<Particle />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<PeoplePage />} />
					<Route path="planets" element={<PlanetsPage />} />
					<Route path="starships" element={<StarshipsPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
