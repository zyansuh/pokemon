import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dex from "./Pages/Dex";
import PokemonDetail from "./Pages/PokemonDetail";
import { PokemonProvider } from "./context/PokemonContext";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
`;

const Title = styled.h1`
  color: #ff6347;
  font-size: 2rem;
  margin-bottom: 20px;
`;

function App() {
  return (
    <PokemonProvider>
      <Container>
        <Title>나만의 포켓몬 도감</Title>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
        </Router>
      </Container>
    </PokemonProvider>
  );
}

export default App;
