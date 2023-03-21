import React from "react";
import { BallTriangle } from "react-loader-spinner";

import "./style.css";

const Loader = () => {
	return (
		<div className="loader">
			<BallTriangle
				height={100}
				width={100}
				radius={5}
				color="white"
				ariaLabel="ball-triangle-loading"
				visible={true}
			/>
		</div>
	);
};

export default Loader;
