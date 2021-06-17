import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";
import getApiData from "../services/api";
import Header from "./Header";
import Main from "./Main";
import CharacterDetail from "./CharacterDetail";
import NotFound from "./NotFound";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchedCharacter, setSearchedCharacter] = useState("");
  const [searchedSpecies, setSearchedSpecies] = useState("");

  useEffect(() => {
    getApiData().then((charactersData) => {
      setCharacters(charactersData);
    });
  }, []);

  const handleFilter = (inputInfo) => {
    if (inputInfo.name === "search") {
      setSearchedCharacter(inputInfo.value);
    } else {
      setSearchedSpecies(inputInfo.value);
    }
  };

  const filteredCharacters = characters
    .filter((character) => {
      return character.name
        .toLowerCase()
        .includes(searchedCharacter.toLowerCase());
    })
    .filter((character) => {
      return character.species.includes(searchedSpecies);
    });

  const renderCharacterDetail = (routerProps) => {
    const routeCharacterId = routerProps.match.params.id;
    const foundCharacter = characters.find(
      (character) => character.id === parseInt(routeCharacterId)
    );

    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <Header />
          <Main
            characters={filteredCharacters}
            searchedCharacter={searchedCharacter}
            handleFilter={handleFilter}
          />
        </div>
      </Route>
      <Route path="/characterDetail/:id" render={renderCharacterDetail} />
    </Switch>
  );
};

export default App;
