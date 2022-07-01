import styled from "styled-components";

export const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: #27ae60;
  border-radius: 10px;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  transition: 0.5s;

  svg {
    color: #fff;
    font-size: 2rem;
    margin: auto;
  }

  :hover {
    background-color: #27ae40;
  }

  @media (min-width: 768px) {
    margin-right: 2rem;
  }

  @media (min-width: 1440px) {
    right: 5rem;
    bottom: 4rem;
  }
`;
