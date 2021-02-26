import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 1.2rem;
  border: 0;
  border-spacing: 0;
  border-collapse: collapse;
  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

export const Thead = styled.thead`
  width: 100%;
  border-bottom: 2px solid rgba(75, 85, 99, 1);

  & tr th {
    border-right: 2px solid rgba(75, 85, 99, 1);

    &:last-child {
      border: 0;
    }
  }

  @media screen and (max-width: 550px) {
    .mobile {
      display: block !important;
      width: 100%;
      border-right: 0;
    }
  }
`;
export const FloatedButton = styled.button`
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 2rem;
  display: none;
  padding: 0.6rem 0.3rem;
  border-radius: 100%;
  outline: none;
  border: none;
  background: orange;
  color: white;
  @media screen and (max-width: 550px) {
    display: block;
  }
`;
export const Row = styled.tr`
  &:nth-child(even) {
    background: lightgray;
  }

  & th,
  td {
    padding: 1rem;
    text-align: center;
    width: calc(100% / 3);
    @media screen and (max-width: 550px) {
      & {
        display: none;
      }
    }
  }
  & td {
    border-right: 2px solid rgba(75, 85, 99, 1);

    &:last-child {
      border: 0;
    }
  }
  @media screen and (max-width: 550px) {
    & th,
    td {
      padding: 0.2rem;
      border-right: 0;
    }
  }
`;
export const Truncated = styled.span`
  display: -webkit-box;
  width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MobileTd = styled.td`
  @media screen and (max-width: 550px) {
    text-align: center;
    width: 100% !important;
    display: block !important;
  }
`;
