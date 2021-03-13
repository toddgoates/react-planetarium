import React from "react";
import styled from "styled-components";
import { WeightProvider } from "../components/WeightContext";
import GlobalStyles from "../styles/GlobalStyles";
import WeightForm from "./WeightForm";
import PlanetList from "./PlanetList";
import Copyright from "./Copyright";

const AppContainer = styled.main`
  max-width: 1400px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <h1>Pocket Planetarium</h1>
      <WeightProvider>
        <WeightForm />
        <PlanetList />
      </WeightProvider>
      <Copyright />
    </AppContainer>
  );
}

export default App;
