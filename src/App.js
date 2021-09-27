import React, { createContext, useEffect, useState } from 'react';

import './styles/App.scss';

import Rock from './images/icon-rock.svg';
import Paper from './images/icon-paper.svg';
import Scissors from './images/icon-scissors.svg';

import Header from './components/Header';
import Game from './components/Game';
import Choice from './components/Choice';

export const GameContext = createContext()

function App() {
  const [myChoice, setMyChoice] = useState(null);
  const [botChoice, setBotChoice] = useState(null);
  const [score, setScore] = useState(0);

  const winners = {
    paper: 'rock',
    rock: 'scissors',
    scissors: 'paper'
  }

  useEffect(() => {
    const winners = {
      paper: 'rock',
      rock: 'scissors',
      scissors: 'paper'
    }

    if(botChoice !== null && myChoice !== null && myChoice !== botChoice) {
      if(winners[myChoice] === botChoice) {
        setScore(s => s + 1)
      } else {
        setScore(s => s - 1)
      }
    }
  }, [botChoice, myChoice])

  const contextValue = {
    myChoice,
    setMyChoice,
    botChoice,
    setBotChoice,
    score,
    setScore,
    Rock,
    Paper,
    Scissors,
    winners
  }

  return (
    <>
    <GameContext.Provider value={contextValue}>
      <Header />
      {myChoice === null ? <Choice /> : <Game />}
    </GameContext.Provider>
    </>
  );
}

export default App;
