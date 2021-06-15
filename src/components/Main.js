import React from "react";
import Filters from "./Filters";
import CharacterList from "./CharacterList";

const Main = (props) => {
  return (
    <main>
      <Filters handleFilter={props.handleFilter} />
      <CharacterList characters={props.characters} />
    </main>
  );
};

export default Main;