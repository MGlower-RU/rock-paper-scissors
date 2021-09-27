import { useContext } from "react"
import { GameContext } from "../App"

export default function Header() {
  const { score } = useContext(GameContext)

  return (
    <header className="header__container">
      <div className="logo">
        ROCK<br/>
        PAPER<br/>
        SCISSORS
      </div>
      <div className="score">
        Score: {score}
      </div>
    </header>
  )
}