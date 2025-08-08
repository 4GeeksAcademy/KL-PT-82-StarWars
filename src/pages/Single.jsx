import React, { useEffect, useState } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";

export default function Single() {
  const { theId } = useParams();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category"); // 'people', 'planets', or 'starships'

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Build API URL based on category and id
  const apiUrl = category
    ? `https://www.swapi.tech/api/${category}/${theId}`
    : null;

  useEffect(() => {
    if (!apiUrl) {
      setError("Category missing in URL");
      setLoading(false);
      return;
    }

    setLoading(true);
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((json) => {
        setData(json.result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return null;

  const { properties, description, name, uid } = data;

  // Construct image URL based on category and uid
  const imgUrl = `https://github.com/breatheco-de/swapi-images/blob/master/public/images/${category}/${uid}.jpg?raw=true`;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{name || properties.name}</h1>

      {/* Image */}
      <img
        src={imgUrl}
        alt={properties.name}
        style={{ maxWidth: "300px", borderRadius: "10px", marginBottom: "20px" }}
      />

      {/* Details */}
      {category === "people" && (
        <>
          <p><strong>Gender:</strong> {properties.gender}</p>
          <p><strong>Height:</strong> {properties.height} cm</p>
          <p><strong>Mass:</strong> {properties.mass} kg</p>
          <p><strong>Hair Color:</strong> {properties.hair_color}</p>
          <p><strong>Skin Color:</strong> {properties.skin_color}</p>
          <p><strong>Eye Color:</strong> {properties.eye_color}</p>
          <p><strong>Birth Year:</strong> {properties.birth_year}</p>
          <p><strong>Homeworld:</strong> {properties.homeworld}</p>
        </>
      )}

      {category === "planets" && (
        <>
          <p><strong>Climate:</strong> {properties.climate}</p>
          <p><strong>Diameter:</strong> {properties.diameter} km</p>
          <p><strong>Gravity:</strong> {properties.gravity}</p>
          <p><strong>Orbital Period:</strong> {properties.orbital_period} days</p>
          <p><strong>Population:</strong> {properties.population}</p>
          <p><strong>Rotation Period:</strong> {properties.rotation_period} hours</p>
          <p><strong>Surface Water:</strong> {properties.surface_water}%</p>
          <p><strong>Terrain:</strong> {properties.terrain}</p>
        </>
      )}

      {category === "starships" && (
        <>
          <p><strong>Model:</strong> {properties.model}</p>
          <p><strong>Manufacturer:</strong> {properties.manufacturer}</p>
          <p><strong>Cost:</strong> {properties.cost_in_credits} credits</p>
          <p><strong>Length:</strong> {properties.length} m</p>
          <p><strong>Max Atmosphering Speed:</strong> {properties.max_atmosphering_speed}</p>
          <p><strong>Crew:</strong> {properties.crew}</p>
          <p><strong>Passengers:</strong> {properties.passengers}</p>
          <p><strong>Cargo Capacity:</strong> {properties.cargo_capacity}</p>
          <p><strong>Consumables:</strong> {properties.consumables}</p>
          <p><strong>Hyperdrive Rating:</strong> {properties.hyperdrive_rating}</p>
          <p><strong>MGLT:</strong> {properties.MGLT}</p>
          <p><strong>Starship Class:</strong> {properties.starship_class}</p>
        </>
      )}

      {description && <p>{description}</p>}

      <Link to="/">← Back to Home</Link>
    </div>
  );
}
