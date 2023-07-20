import useData from "./useData";

const useGames = (selectedGenre, selectedPlatform) => {
  return useData(
    "games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};

export default useGames;
