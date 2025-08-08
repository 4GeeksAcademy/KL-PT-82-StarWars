import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";
import PlanetsCard from "../components/PlanetsCard.jsx";
import StarshipsCard from "../components/StarshipsCard.jsx";

export default function Favorites() {
  const { store, dispatch } = useGlobalReducer();

  const toggleFavorite = (uid, category) => {
    dispatch({ type: "toggle_favorite", payload: { uid, category } });
  };

  // Helper to find favorite items by category and uid
  const getFavoritesByCategory = (categoryData, categoryName) => {
    return categoryData.filter((item) =>
      store.favorites.some(
        (fav) => fav.uid === item.uid && fav.category === categoryName
      )
    );
  };

  const favoritePeople = getFavoritesByCategory(store.people, "people");
  const favoritePlanets = getFavoritesByCategory(store.planets, "planets");
  const favoriteStarships = getFavoritesByCategory(store.starships, "starships");

  return (
    <div className="text-center mt-5">
      <h1>My Favorites</h1>

      {favoritePeople.length > 0 && (
        <>
          <h2>People</h2>
          <div className="sw-card-container">
            {favoritePeople.map((person) => (
              <PeopleCard
                key={person.uid}
                props={person}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}

      {favoritePlanets.length > 0 && (
        <>
          <h2>Planets</h2>
          <div className="sw-card-container">
            {favoritePlanets.map((planet) => (
              <PlanetsCard
                key={planet.uid}
                props={planet}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}

      {favoriteStarships.length > 0 && (
        <>
          <h2>Starships</h2>
          <div className="sw-card-container">
            {favoriteStarships.map((ship) => (
              <StarshipsCard
                key={ship.uid}
                props={ship}
                isFavorite={true}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        </>
      )}

      {favoritePeople.length === 0 &&
       favoritePlanets.length === 0 &&
       favoriteStarships.length === 0 && (
        <p>You have not selected any favorites yet.</p>
      )}
    </div>
  );
}
