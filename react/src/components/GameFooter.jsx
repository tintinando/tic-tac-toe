import { HoldButton } from './holdButton'
import '../App.css'
import { Square } from './Square'

export function GameFooter ({ game, gameState, setBoard, setGameState }) {
  const customIcons = game.current.getCustomIcons()

  const handleNewGame = () => {
    game.current.newGame()
    setBoard(game.current.getBoard())
    setGameState(game.current.getState())
  }

  return (
    <>
      <section className='turns'>
        <Square
          isSelected={gameState.turn === 'x'}
        >
          {customIcons.x}
        </Square>
        <Square
          isSelected={gameState.turn === 'o'}
        >
          {customIcons.o}
        </Square>
      </section>
      <section className='new-game'>
        <HoldButton onClick={handleNewGame} time={200}>
          Nuevo juego
        </HoldButton>
      </section>
    </>
  )
}
