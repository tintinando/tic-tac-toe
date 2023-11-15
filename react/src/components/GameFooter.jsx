import { HoldButton } from './holdButton'
import '../App.css'
import { Square } from './Square'
import { useState } from 'react'

export function GameFooter ({ gameState, newGame }) {
  const customIcons = gameState.customIcons
  const [keepIcons, setKeepIcons] = useState(false)

  const handleNewGame = () => {
    newGame({ redefineIcons: !keepIcons })
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
        <label>
          Mantener íconos
          <input
            type='checkbox'
            value={keepIcons}
            onChange={() => setKeepIcons(prev => !prev)}
          />
        </label>
      </section>
    </>
  )
}
