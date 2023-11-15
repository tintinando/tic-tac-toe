import './App.css'

import { Game } from './components/Game.jsx'
import { GameFooter } from './components/GameFooter'
import { useGame } from './hooks/useGame.jsx'

function App () {
  const { doMove, gameState, newGame } = useGame({ random: true })

  return (
    <>
      <h1>Ta - Te - Ti</h1>
      <section className='container'>
        <Game
          gameState={gameState}
          doMove={doMove}
        />

        <GameFooter
          gameState={gameState}
          newGame={newGame}
        />
      </section>
    </>
  )
}

export default App
