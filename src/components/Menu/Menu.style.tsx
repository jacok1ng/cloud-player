import styled from "styled-components"

export const StyledMenu = styled.div`
  justify-content: space-around;
  svg {
    margin: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    transition: 0.4s;
  }
  svg:hover {
    -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.3));
  }
  svg:nth-child(2) {
    transform: translateX(3px);
  }
`
