import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MOCK_DATA from "../Data/MOCK_DATA";
import { usePokemon } from "../context/PokemonContext";

const DetailContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
`;

const PokemonName = styled.h2`
  color: #333;
`;

const PokemonType = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
`;

const DeleteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #ff4500;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d43700;
  }
`;

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selectedPokemon, removePokemon } = usePokemon();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id, 10));

  if (!pokemon) {
    return <p>포켓몬을 찾을 수 없습니다.</p>;
  }

  const handleDelete = () => {
    removePokemon(pokemon.id);
    navigate("/dex");
  };

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonType>타입: {pokemon.types.join(", ")}</PokemonType>
      <Description>설명: {pokemon.description}</Description>
      <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
    </DetailContainer>
  );
}

export default PokemonDetail;

