import React, { useEffect, useState } from "react";
import StarWarsCard from "../components/StarWarsCard";

const People = () => {
	const [people, setPeople] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people")
			.then((res) => res.json())
			.then((data) => setPeople(data.results))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div className="container d-flex flex-wrap gap-4">
			{people.map((person, index) => (
				<StarWarsCard
					key={index}
					title={person.name}
					description={`Gender: ${person.gender}, Birth year: ${person.birth_year}`}
				>
					<button className="btn btn-sm btn-outline-warning">Add to Favorites</button>
				</StarWarsCard>
			))}
		</div>
	);
};

export default People;
