import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  background-color: #342220;

  @media (min-width: 768px) {
    justify-content: space-around;
    flex-direction: row;
    height: 100px;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    margin-left: 10px;
    color: #ffdeb3;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const BoxSearch = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 45px;
  border-radius: 15px;
  background-color: #fecd23 /**/;

  input {
    width: 48vw;
    height: 35px;
    margin: 5px 0 5px 5px;
    padding-left: 1rem;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    outline: none;
  }

  button {
    width: 23vw;
    height: 35px;
    margin: 5px 5px 5px 0;
    color: #fff;
    background-color: /*#7cd164*/ #27ae60;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  @media (min-width: 425px) {
    width: 70vw;
  }

  @media (min-width: 768px) {
    width: 50vw;
    max-width: 512px;
  }
`;

export const Sandwich = styled.div`
  width: 100vw;
  height: 10px;
  background-color: ${(props) => (props.cheese ? "#fecd23" : "#27ae60")};
`;

export const SandwichTomato = styled.div`
  width: 100vw;
  height: 10px;
  background-color: #fc370c;
`;
