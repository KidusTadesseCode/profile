// TicTacToe.Style.js
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  color: white;
  padding: 6rem 3rem 3rem 3rem;
  @media (max-width: 768px) {
    padding: 2rem;
    height: 100vh;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;
const TicTacToeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  margin: 3rem auto;
  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 300px;
  }
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 10px;
  @media (max-width: 480px) {
    grid-template-columns: repeat(3, 80px);
    grid-template-rows: repeat(3, 80px);
  }
`;

const Cell = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000000;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const Message = styled.h3`
  margin-top: 1.5rem;
  font-size: 1.8rem;
  color: #ffcc00;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const RestartButton = styled.button`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  background-color: #ff4081;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e91e63;
    transform: translateY(-3px);
  }
  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ffffff;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6);
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// const Heading = styled.h1`
//   font-size: 2.5rem;
//   color: #ffcc00;
//   text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
//   margin-bottom: 2rem;
//   text-align: center;
//   padding: 1rem 0 0 0;
//   margin: 0;
//   @media (max-width: 480px) {
//     font-size: 2.5rem;
//   }
// `;

const Heading = styled.div`
  & h1 {
    font-size: 2rem;
    color: #ffcc00;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
    margin-bottom: 2rem;
    text-align: center;
    padding: 1rem 0 0 0;
    margin: 0;
    /* @media (max-width: 480px) {
      font-size: 2.5rem;
    } */
  }

  & h2 {
    font-size: 1.5rem;
    color: #ffcc00;
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.7);
    margin-bottom: 2rem;
    text-align: center;
    padding: 1rem 0 0 0;
    margin: 0;
    /* @media (max-width: 480px) {
      font-size: 2rem;
    } */
  }
`;

export {
  Container,
  TicTacToeContainer,
  Board,
  Cell,
  Message,
  RestartButton,
  Title,
  Heading,
};
