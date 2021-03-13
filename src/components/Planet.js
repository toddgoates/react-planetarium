import React from "react";
import styled from "styled-components";

const PlanetCard = styled.div`
  background: var(--lightGray);
  border: solid 4px var(--lightGray);
  color: var(--darkGray);
  padding-bottom: 10px;
  text-align: center;

  img {
    width: 100%;
  }

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
`;

function Planet({ planet, weight }) {
  const planetaryWeight = (weight * planet.ratio).toFixed(2);
  return (
    <PlanetCard>
      <img src={`images/${planet.image}`} alt={planet.name} />
      <h2>{planet.name}</h2>
      <p>
        {weight === 0
          ? "Enter your weight"
          : `You weigh ${planetaryWeight} lbs`}
      </p>
    </PlanetCard>
  );
}

export default Planet;
