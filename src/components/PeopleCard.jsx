import React from "react";
import "./PeopleCard.css";


// https://www.swapi.tech/api/people/?expanded=true

function PeopleCard({props}) {
	return (
		<div className="sw-card">
			<img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${props.uid}.jpg?raw=true`}></img>
			<h5 className="sw-card-title">{props.properties.name}</h5>
			<p className="sw-card-description">Gender: {props.properties.gender}</p>
			<div className="sw-card-actions">Eye Color: {props.properties.eye_color}</div>
		</div>
	);	
}

export default PeopleCard;
