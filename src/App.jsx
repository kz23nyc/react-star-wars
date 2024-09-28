import { useEffect, useState } from "react";
import { getAllStarships } from "./services/sw-api"; 
import StarshipCard from "./components/StarshipCard";
import "./style.css";

const App = () => {
  const [starships, setStarships] = useState([]);
 
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="app">
      <h1>Star Wars Starships</h1>
      <div className="starship-cards">
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
};

export default App;
