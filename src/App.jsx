import { Grid, GridItem, Show, useStatStyles } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformFilter from "./components/PlatformFilter";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [menuItem, setMenuItem] = useState(null);

  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: `'nav nav''aside main'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => {
              setSelectedGenre(genre);
            }}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformFilter
          menuItem={menuItem}
          setMenuItem={(menu) => {
            setMenuItem(menu);
            console.log(menu);
          }}
        />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
