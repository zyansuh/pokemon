import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 150px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const PokemonImage = styled.img`
  width: 80px;
  height: 80px;
`;

const PokemonName = styled.h3`
  font-size: 1rem;
  margin: 10px 0 5px;
`;

const AddButton = styled.button`
  padding: 8px 16px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff4500;
  }
`;

function PokemonCard({ pokemon, onAdd }) {
  return (
    <CardContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <AddButton onClick={onAdd}>추가</AddButton> {/* onAdd 함수 호출 */}
    </CardContainer>
  );
}

export default PokemonCard;
