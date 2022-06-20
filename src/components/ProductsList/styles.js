import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  max-width: 90vw;
  background-color: #ff8716;
  border-radius: 8px;

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
    background-color: #ffdeb3;
  }

  @media (min-width: 1024px) {
    margin: 0;
    width: 100%;
    max-width: 900px;
  }
`;
