import React, { useContext, useEffect } from 'react';
import { GameContext } from '../App';

export default function Game() {
  const { myChoice, setMyChoice, botChoice, setBotChoice, winners } = useContext(GameContext)

  function handleTry(e) {
    e.preventDefault();
    setBotChoice(null);
    setMyChoice(null);
  }

  useEffect(() => {
    const result = document.querySelector('.game__result span');

    if(myChoice === botChoice) {
      return
    } else if(winners[myChoice] === botChoice) {
      result.style.color = 'rgb(140, 241, 126)';
    } else {
      result.style.color = 'rgb(231, 94, 94)';
    }
  }, [botChoice, myChoice, winners])

  return (
    <div className="game__wrapper">
      <div className="game__result">
        {
          myChoice === botChoice ? <Result result='Tie' /> : winners[myChoice] === botChoice ? <Result result='Win' /> : <Result result='Lose' />
        }
      </div>
      <a href="/" onClick={handleTry}>
        Press to try again!
      </a>
    </div>
  )
}

function Result({result}) {
  const { myChoice, botChoice, Rock, Paper, Scissors } = useContext(GameContext)

  const imageChoice = {
    paper: Paper,
    rock: Rock,
    scissors: Scissors
  }

  return (
    <>
      <div data-sign={myChoice}>
        <img src={imageChoice[myChoice]} alt="" />
      </div>
      <span>
       {result}
      </span>
      <div data-sign={botChoice}>
        <img src={imageChoice[botChoice]} alt="" />
      </div>
    </>
  )
}