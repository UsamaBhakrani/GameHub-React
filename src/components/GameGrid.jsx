import { useEffect, useState } from "react";
import api from "../services/api";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, [games]);

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
};

export default GameGrid;
