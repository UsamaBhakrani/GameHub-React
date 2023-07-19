import { useState, useEffect } from "react";
import api from "../services/api";

const useGenres = () => {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get("genres")
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
