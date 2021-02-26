import styled, { css } from "styled-components";
export const Link = styled.span`
  color: ${(props) => (props.active ? "white" : "black")};
  font-size: 1.2rem;
  list-style: none;
  cursor: pointer;
  &:last-child:after {
    content: "";
  }

  &:after {
    content: "|";
    color: black;
    padding: 0 0.5rem;
  }
`;

export const Navigation = styled.nav`
  position: sticky;
  top: 0;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: orange;
`;
