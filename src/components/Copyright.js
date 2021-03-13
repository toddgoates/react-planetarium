import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: var(--accent);
  text-align: center;

  a {
    color: var(--accent);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Copyright() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>
        &copy; {currentYear}{" "}
        <a href="https://toddgoates.com" target="_blank">
          Todd Goates
        </a>
      </p>
    </StyledFooter>
  );
}

export default Copyright;
