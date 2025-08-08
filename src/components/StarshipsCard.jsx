import React from "react";
import { Link } from "react-router-dom";
import "./StarshipsCard.css";

function StarshipsCard({ props, isFavorite, onToggleFavorite }) {
  return (
    <div className="sw-card">
      <Link
        to={`/single/${props.uid}?category=starships`}
        style={{ color: "inherit", textDecoration: "none", display: "block" }}
      >
        <img
          src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/starships/${props.uid}.jpg?raw=true`}
          alt={props.properties.name}
        />
        <h5 className="sw-card-title">{props.properties.name}</h5>
        <p className="sw-card-description">Model: {props.properties.model}</p>
        <div className="sw-card-actions">Starship Class: {props.properties.starship_class}</div>
      </Link>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(props.uid, "starships");
        }}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className={`favorite-button ${isFavorite ? "active" : "inactive"}`}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </div>
  );
}

export default StarshipsCard;
