import React, { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }
    if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    setSelectedPokemon((prev) => [...prev, pokemon]);
  };

  const removePokemon = (pokemonId) => {
    setSelectedPokemon((prev) => prev.filter((pokemon) => pokemon.id !== pokemonId));
  };

  return (
    <PokemonContext.Provider value={{ selectedPokemon, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}