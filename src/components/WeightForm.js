import React, { useContext } from "react";
import styled from "styled-components";
import WeightContext from "./WeightContext";

const WeightCard = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin-bottom: 30px;

  input {
    background: var(--lightGray);
    color: var(--darkGray);
    font-size: 18px;
    padding: 10px;
  }
`;

function WeightForm() {
  const [weight, setWeight] = useContext(WeightContext);

  function updateWeight(event) {
    setWeight(event.target.value);
  }

  return (
    <WeightCard>
      <input
        type="number"
        min="0"
        name="weight"
        placeholder="Enter your weight in lbs"
        onChange={updateWeight}
      />
    </WeightCard>
  );
}

export default WeightForm;
