import useData from "./useData";

const useGames = (selectedGenre) => {
  return useData(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );
};

export default useGames;
