import React from "react";
import "./StarWarsCard.css";

function StarWarsCard(props) {
	return (
		<div className="sw-card">
			<h5 className="sw-card-title">{props.title}</h5>
			<p className="sw-card-description">{props.description}</p>
			<div className="sw-card-actions">{props.children}</div>
		</div>
	);
}

export default StarWarsCard;
