import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1024px;

  @media (min-width: 768px) {
    margin-top: 2rem;
  }
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
