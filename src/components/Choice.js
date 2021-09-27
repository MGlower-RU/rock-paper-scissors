import { useContext } from "react";
import { GameContext } from "../App";

export default function Choice() {
  const {setMyChoice, setBotChoice, Rock, Paper, Scissors} = useContext(GameContext)
  const signsArray = ['rock', 'paper', 'scissors']

  function handleChoice(e) {
    e.preventDefault();

    const rand = Math.round(Math.random() * 2.5 - 0.5);

    setMyChoice(e.target.closest('a').dataset.sign);
    setBotChoice(signsArray[rand === -0 ? 0 : rand]);
  }

  return (
    <div className="choice__wrapper">
      <a
        href="/"
        data-sign='paper'
        onClick={handleChoice}
      >
        <img src={Paper} alt="" />
      </a>
      <a
        href="/"
        data-sign='scissors'
        onClick={handleChoice}
      >
        <img src={Scissors} alt="" />
      </a>
      <a
        href="/"
        data-sign='rock'
        onClick={handleChoice}
      >
          <img src={Rock} alt="" />
        </a>
    </div>
  )
}