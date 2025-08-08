export const initialStore = () => ({
  message: null,
  people: [],
  planets: [],
  starships: [],
  favorites: [], // track favorites by uid + category
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_people":
      return { ...store, people: action.payload };

    case "add_planets":
      return { ...store, planets: action.payload };

    case "add_starship":
      return { ...store, starships: action.payload };

    case "toggle_favorite": {
      const { uid, category } = action.payload;
      const exists = store.favorites.find(
        (fav) => fav.uid === uid && fav.category === category
      );
      let updatedFavorites;
      if (exists) {
        updatedFavorites = store.favorites.filter(
          (fav) => !(fav.uid === uid && fav.category === category)
        );
      } else {
        updatedFavorites = [...store.favorites, { uid, category }];
      }
      return { ...store, favorites: updatedFavorites };
    }

    default:
      throw Error("Unknown action.");
  }
}
