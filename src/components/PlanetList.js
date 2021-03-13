import React, { useContext } from "react";
import styled from "styled-components";
import WeightContext from "./WeightContext";
import Planet from "./Planet";

const PlanetGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

function PlanetList() {
  const [weight, setWeight] = useContext(WeightContext);
  const planets = [
    { id: 1, name: "Mercury", ratio: 0.378, image: "mercury.jpg" },
    { id: 2, name: "Venus", ratio: 0.907, image: "venus.jpg" },
    { id: 3, name: "Earth", ratio: 1, image: "earth.jpg" },
    { id: 4, name: "Moon", ratio: 0.166, image: "moon.png" },
    { id: 5, name: "Mars", ratio: 0.377, image: "mars.jpg" },
    { id: 6, name: "Jupiter", ratio: 2.53, image: "jupiter.jpg" },
    { id: 7, name: "Saturn", ratio: 1.06, image: "saturn.jpg" },
    { id: 8, name: "Uranus", ratio: 0.889, image: "uranus.jpg" },
    { id: 9, name: "Neptune", ratio: 1.12, image: "neptune.jpg" },
    { id: 10, name: "Pluto", ratio: 0.071, image: "pluto.jpg" },
  ];

  return (
    <section>
      <PlanetGrid>
        {planets.map((planet) => (
          <Planet planet={planet} weight={weight} key={planet.id} />
        ))}
      </PlanetGrid>
    </section>
  );
}

export default PlanetList;
