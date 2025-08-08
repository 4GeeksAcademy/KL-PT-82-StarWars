import React from "react";
import { Link } from "react-router-dom";
import "./PlanetsCard.css";

function PlanetsCard({ props, isFavorite, onToggleFavorite }) {
  return (
    <div className="sw-card">
      <Link
        to={`/single/${props.uid}?category=planets`}
        style={{ color: "inherit", textDecoration: "none", display: "block" }}
      >
        <img
          src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planets/${props.uid}.jpg?raw=true`}
          alt={props.properties.name}
        />
        <h5 className="sw-card-title">{props.properties.name}</h5>
        <p className="sw-card-description">Climate: {props.properties.climate}</p>
        <div className="sw-card-actions">Terrain: {props.properties.terrain}</div>
      </Link>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(props.uid, "planets");
        }}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className={`favorite-button ${isFavorite ? "active" : "inactive"}`}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
}

export default PlanetsCard;
