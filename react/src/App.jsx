import './App.css'
import TicTacToe from './logic/tictactoe.mjs'

import { Game } from './components/Game'
import { useRef, useState } from 'react'
import { GameFooter } from './components/GameFooter'
import { randomIcons } from './helpers/randomIcons.js'

function App () {
  const game = useRef(TicTacToe())
  const [board, setBoard] = useState(game.current.getBoard())
  const [gameState, setGameState] = useState(game.current.getState())

  const icons = useRef(randomIcons())

  game.current.setCustomIcons(
    {
      x: icons.current[0],
      o: icons.current[1]
    })

  return (
    <>
      <h1>Ta - Te - Ti</h1>
      <section className='container'>
        <Game
          game={game}
          board={board}
          setBoard={setBoard}
          gameState={gameState}
          setGameState={setGameState}
        />

        <GameFooter
          game={game}
          gameState={gameState}
          setGameState={setGameState}
          setBoard={setBoard}
        />
      </section>
    </>
  )
}

export default App
