import { HStack, List, ListItem, Button, Image } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";
import imageUrl from "../services/imageUrl";
import useGenres from "../hooks/useGenres";

const GenreList = ({ onSelectGenre }) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <GenreListSkeleton />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              borderRadius={8}
              boxSize="30px"
              src={imageUrl(genre.image_background)}
              alt={genre.name}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              size="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
