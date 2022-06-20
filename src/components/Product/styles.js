import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  border: 2px solid #342220;
  border-radius: 8px;
  color: #342220;

  div {
    width: 55vw;

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      margin: 10px 0;
    }

    button {
      width: 50px;
      height: 30px;
      background-color: #27ae60;
      border-radius: 8px;
      margin: 5px 0;

      svg {
        margin-top: 4px;
        font-size: 17px;
        color: #fff;
      }
    }
  }

  @media (min-width: 321px) {
    div {
      width: 40vw;
      max-width: 225px;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 200px;

      button {
        margin-bottom: 10px;
      }
    }
  }
`;

export const Box = styled.figure`
  display: flex;
  width: 100%;
`;

// #ff8716

export const Img = styled.img`
  width: 7rem;
  height: 7rem;
  margin: auto;
`;
