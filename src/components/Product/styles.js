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
  flex-shrink: 0;
  scroll-snap-align: start;
  transition: 0.5s;

  div {
    width: 70vw;

    h2 {
      font-size: 20px;
      font-weight: 700;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
    }

    p {
      font-weight: 700;
      margin: 10px 0;
    }

    button {
      width: 50px;
      height: 30px;
      background-color: #27ae60;
      border-radius: 8px;
      margin: 10px 0;

      :hover {
        background-color: #27ae40;
      }

      svg {
        margin: 0 0.9rem;
        font-size: 17px;
        color: #fff;
      }
    }
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }

  @media (min-width: 375px) {
    div {
      width: 60vw;
      max-width: 225px;
    }
  }

  @media (min-width: 768px) {
    div {
      width: 250px;

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

export const Img = styled.img`
  width: 8rem;
  height: 8rem;
  margin: auto;
`;
