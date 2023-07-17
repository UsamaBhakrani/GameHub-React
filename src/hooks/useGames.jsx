import { useState, useEffect } from "react";
import api from '../services/api'

const useGames = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get('games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
};

export default useGames;
