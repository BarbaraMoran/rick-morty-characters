import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handleInput = (event) => {
    props.handleFilter({
      value: event.target.value,
      name: event.target.name,
    });
  };

  const submitPrevent = (event) => {
    event.preventDefault();
  };

  return (
    <section className="search-section">
      <form className="search-section__form" onSubmit={submitPrevent}>
        <label className="form__label" htmlFor="search">
          ¡Busca tus personajes favoritos de la serie!
        </label>
        <input
          className="form__input"
          id="search"
          type="text"
          name="search"
          placeholder="Ej: Albert Einstein"
          value={props.searchedCharacter}
          onChange={handleInput}
        />
        <label className="form__label" htmlFor="species">
          Especies
        </label>

        <select
          className="form__input"
          name="species"
          id="species"
          //value={props.searchedSpecies}
          onClick={handleInput}
        >
          <option value="">Todas</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
      </form>
    </section>
  );
};

export default Filters;
