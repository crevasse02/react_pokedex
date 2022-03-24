import PokeCard from "../components/PokeCard"

const URL = "https://pokeapi.co/api/v2/pokemon";
const URL_types = "https://pokeapi.co/api/v2/type";

export const FetchPokemon = () => {
  return fetch(URL).then((response) => response.json());
};

export const FetchType = () => {
  return fetch(URL_types).then((response) => response.json());
};
