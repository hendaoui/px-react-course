import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPokemonData } from "../store/pokemonSlice";

const PokemonList = () => {
  const [list, setList] = useState<any[]>([]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchPokemonData = (url: string) => {
    fetch(url)
      .then((response) => response.json())
      .then((pokemon: any) => {
        setList((_list) => [..._list, pokemon]);
      });
  };

  const fetchPokemonList = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((list) => {
        list.results.forEach((pokemon: any) => {
          fetchPokemonData(pokemon.url);
        });
      });
  };
  useEffect(() => {
    fetchPokemonList();
  }, []);

  const showDetails = (pokemon: any) => {
    dispatch(setPokemonData(pokemon));
    navigate("/" + pokemon?.id);
  };

  const renderList = () => {
    return list.length > 0 ? (
      <div className="columns is-multiline is-centered">
        {list.map((pokemon, index) => (
          <div
            className="column is-one-quarter box"
            key={index}
            onClick={(e) => showDetails(pokemon)}
          >
            <img
              src={pokemon?.sprites?.other?.dream_world?.front_default}
              alt=""
            />
            <div className="divider" />
            <h5 className="title is-5 pokemon-card_name">{pokemon?.name}</h5>
          </div>
        ))}
      </div>
    ) : (
      <h3 className="title is-3">Loading...</h3>
    );
  };

  return <div className="list-container">{renderList()}</div>;
};
export default PokemonList;
