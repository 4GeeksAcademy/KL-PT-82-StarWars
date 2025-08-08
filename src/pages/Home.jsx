import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import PeopleCard from "../components/PeopleCard.jsx";
import PlanetsCard from "../components/PlanetsCard.jsx";
import StarshipsCard from "../components/StarshipsCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getPeople = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/people/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_people", payload: data.results });
  };

  const getPlanets = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/planets/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_planets", payload: data.results });
  };

  const getStarShips = async () => {
    const response = await fetch(
      "https://www.swapi.tech/api/starships/?expanded=true"
    );
    const data = await response.json();
    dispatch({ type: "add_starship", payload: data.results });
  };

  useEffect(() => {
    getPeople();
    getPlanets();
    getStarShips();
  }, []);

  const toggleFavorite = (uid, category) => {
    dispatch({ type: "toggle_favorite", payload: { uid, category } });
  };

  return (
    <div className="text-center mt-5">
      <h1>Star Wars Characters</h1>
      <div className="sw-card-container">
        {store.people.map((person) => (
          <PeopleCard
            key={person.uid}
            props={person}
            isFavorite={store.favorites.some(
              (fav) => fav.uid === person.uid && fav.category === "people"
            )}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <h1>Planets</h1>
      <div className="sw-card-container">
        {store.planets?.map((planet) => (
          <PlanetsCard
            key={planet.uid}
            props={planet}
            isFavorite={store.favorites.some(
              (fav) => fav.uid === planet.uid && fav.category === "planets"
            )}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <h1>Starships</h1>
      <div className="sw-card-container">
        {store.starships?.map((ship) => (
          <StarshipsCard
            key={ship.uid}
            props={ship}
            isFavorite={store.favorites.some(
              (fav) => fav.uid === ship.uid && fav.category === "starships"
            )}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};
