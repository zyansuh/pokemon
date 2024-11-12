import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../Data/MOCK_DATA";
import { usePokemon } from "../context/PokemonContext";

const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

function PokemonList() {
  const { addPokemon } = usePokemon();

  return (
    <PokemonListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => addPokemon(pokemon)}
        />
      ))}
    </PokemonListContainer>
  );
}

export default PokemonList;
