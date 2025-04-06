import React, { useState } from 'react';
import { Snooker } from './Snooker';
import { Score } from './Score';
import { Sink } from './Sink';
import './App.css';

function App() {
  const [snooker] = useState(new Snooker());
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState<Score>(new Score(0, 0));
  const [showModal, setShowModal] = useState(false);

  const startGame = () => {
    if (player1Name && player2Name) {
      snooker.addPlayer(player1Name);
      snooker.addPlayer(player2Name);
      setCurrentPlayer(player1Name);
      setGameStarted(true);
    }
  };

  const handleMiss = () => {
    const nextPlayer = snooker.recordMiss(currentPlayer);
    setCurrentPlayer(nextPlayer);
  };

  const handleSink = (sink: Sink) => {
    const newScore = snooker.recordShot(currentPlayer, sink);
    setScore(snooker.getScore());
  };

  const quitGame = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setGameStarted(false);
    setPlayer1Name('');
    setPlayer2Name('');
    setCurrentPlayer('');
    setScore(new Score(0, 0));
  };

  if (!gameStarted) {
    return (
      <div className="App">
        <h1>Welcome to Snooker</h1>
        <div className="player-input">
          <input
            type="text"
            placeholder="Player 1 name"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
          <input
            type="text"
            placeholder="Player 2 name"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
          <button onClick={startGame}>Start Game</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Snooker Game</h1>
      <div className="game-info">
        <h2>Current Player: {currentPlayer}</h2>
        <div className="scores">
          <div className={`score-item ${currentPlayer === player1Name ? 'active-player' : ''}`}>
            <span className="player-name">{player1Name}</span>
            <span className="player-score">{score.player1Score}</span>
          </div>
          <div className={`score-item ${currentPlayer === player2Name ? 'active-player' : ''}`}>
            <span className="player-name">{player2Name}</span>
            <span className="player-score">{score.player2Score}</span>
          </div>
        </div>
      </div>
      
      <div className="game-controls">
        <button onClick={handleMiss}>Miss</button>
        <div className="ball-options">
          <button onClick={() => handleSink(Sink.RED)}>🔴 Red (1)</button>
          <button onClick={() => handleSink(Sink.YELLOW)}>🟡 Yellow (2)</button>
          <button onClick={() => handleSink(Sink.GREEN)}>🟢 Green (3)</button>
          <button onClick={() => handleSink(Sink.BROWN)}>🟤 Brown (4)</button>
          <button onClick={() => handleSink(Sink.BLUE)}>🔵 Blue (5)</button>
          <button onClick={() => handleSink(Sink.PINK)}><span className="pink-ball">🔴</span> Pink (6)</button>
          <button onClick={() => handleSink(Sink.BLACK)}>⚫ Black (7)</button>
        </div>
        <button onClick={quitGame}>Quit</button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Final Score</h2>
            <p>{player1Name}: {score.player1Score} points</p>
            <p>{player2Name}: {score.player2Score} points</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
