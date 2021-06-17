import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetail.scss";
import Header from "./Header";

const CharacterDetail = (props) => {
  console.log(props.character);

  return (
    <div>
      <Header />
      <main className="main-detail">
        <Link to="/" className="home-link">
          <i className="fas fa-angle-double-left"></i> Volver
        </Link>
        <article className="article">
          <img
            className="article__img"
            src={props.character.picture}
            alt={props.character.name}
          />

          <ul>
            <li>
              <h2>{props.character.name}</h2>
            </li>
            <li>Status: {props.status}</li>
            <li>Species: {props.character.species}</li>
            <li>Origin: {props.character.planet}</li>
            <li>Episodes number: {props.character.episodesNumber}</li>
          </ul>
        </article>
      </main>
    </div>
  );
};

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string,
    picture: PropTypes.string,
    species: PropTypes.string,
    planet: PropTypes.string,
    episodesNumber: PropTypes.number,
    status: PropTypes.string,
  }),
};

export default CharacterDetail;
