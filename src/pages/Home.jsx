import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import PeopleCard from "../components/PeopleCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  const getPeople = async () => {
    const response = await fetch("https://www.swapi.tech/api/people/?expanded=true");
    const data = await response.json();
    dispatch({ type: "add_people", payload: data.results });
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Star Wars Characters</h1>
      <div className="sw-card-container">
        {store.people.map((person) => (
          <PeopleCard key={person.uid} props={person} />
        ))}
      </div>
    </div>
  );
};
