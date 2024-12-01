// TicTacToe.js
import React, { useState } from "react";
import {
  Container,
  TicTacToeContainer,
  Board,
  Cell,
  Message,
  RestartButton,
  Title,
  Heading,
} from "../styles/TicTacToe.Style";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [message, setMessage] = useState("");

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (board) => {
    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const makeMove = (index) => {
    if (!board[index] && isUserTurn && !message) {
      const newBoard = board.slice();
      newBoard[index] = "X";
      setBoard(newBoard);
      setIsUserTurn(false);
      const winner = checkWinner(newBoard);
      if (winner) {
        setMessage("You won!");
        return;
      }
      setTimeout(() => makeAIMove(newBoard), 500);
    }
  };

  const makeAIMove = (newBoard) => {
    const bestMove = findBestMove(newBoard);
    if (bestMove !== -1) {
      newBoard[bestMove] = "O";
      setBoard(newBoard);
      const winner = checkWinner(newBoard);
      if (winner) {
        setMessage("You lost!");
        return;
      }
      setIsUserTurn(true);
    }
    const boardFilledLength = board.filter((cell) => cell !== null).length;
    if (boardFilledLength === 8) {
      setMessage("Tie game!");
    }
  };

  const findBestMove = (newBoard) => {
    let bestScore = -Infinity;
    let move = -1;
    for (let i = 0; i < newBoard.length; i++) {
      if (!newBoard[i]) {
        newBoard[i] = "O";
        let score = minimax(newBoard, 0, false);
        newBoard[i] = null;
        if (score > bestScore) {
          bestScore = score;
          move = i;
        }
      }
    }
    return move;
  };

  const minimax = (board, depth, isMaximizing) => {
    const winner = checkWinner(board);
    if (winner === "X") return -10;
    if (winner === "O") return 10;
    if (!board.includes(null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "O";
          let score = minimax(board, depth + 1, false);
          board[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          board[i] = "X";
          let score = minimax(board, depth + 1, true);
          board[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setMessage("");
  };

  return (
    <Container>
      <Heading>
        <h1>Think You Can Beat the Unbeatable?</h1>
        <h2>Tic Tac Toe Awaits!</h2>
      </Heading>
      <TicTacToeContainer>
        <Title>Play Tic Tac Toe</Title>
        <Board>
          {board.map((cell, index) => (
            <Cell key={index} onClick={() => makeMove(index)}>
              {cell}
            </Cell>
          ))}
        </Board>
        {message && <Message>{message}</Message>}
        <RestartButton onClick={restartGame}>Restart Game</RestartButton>
      </TicTacToeContainer>
    </Container>
  );
};

export default TicTacToe;
