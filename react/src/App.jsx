import './App.css'
import TicTacToe from './logic/tictactoe.mjs'

import { Game } from './components/Game'
import { useRef, useState } from 'react'
import { GameFooter } from './components/GameFooter'

function App () {
  const game = useRef(TicTacToe())
  const [board, setBoard] = useState(game.current.getBoard())
  const [gameState, setGameState] = useState(game.current.getState())

  const icons1 = ['🐵', '🐶', '🐺', '🐱', '🦁', '🐯', '🦒', '🦊']
  const icons2 = ['🐨', '🐼', '🐸', '🦓', '🐔', '🦍', '🐩', '🐕']
  const randomIcon = useRef(Array(2).fill(Math.round(Math.random() * 8)))

  game.current.setCustomIcons(
    {
      x: icons1[randomIcon.current[0]],
      o: icons2[randomIcon.current[1]]
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
