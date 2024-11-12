import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  border: 2px solid #0055ff;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const PokemonSlot = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #f9f9f9;
  cursor: pointer;
`;

const SlotImage = styled.img`
  width: 50px;
  height: 50px;
`;

function Dashboard() {
  const { selectedPokemon } = usePokemon();
  const navigate = useNavigate();

  return (
    <DashboardContainer>
      {selectedPokemon.map((pokemon) => (
        <PokemonSlot key={pokemon.id} onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
          <SlotImage src={pokemon.img_url} alt={pokemon.korean_name} />
        </PokemonSlot>
      ))}
    </DashboardContainer>
  );
}

export default Dashboard;
