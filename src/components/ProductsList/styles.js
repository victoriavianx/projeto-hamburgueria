import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  margin: 1rem 1rem 1rem 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  max-width: 90vw;
  border-radius: 8px;
  scroll-snap-type: x mandatory;

  ::-webkit-scrollbar {
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #342220;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: auto;
    max-width: 675px;
  }

  @media (min-width: 1024px) {
    margin: 0 0 3rem 0;
    width: 100%;
    max-width: 900px;
  }
`;
