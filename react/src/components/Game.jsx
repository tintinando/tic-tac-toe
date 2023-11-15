import { Square } from './Square'

export function Game ({ gameState, doMove }) {
  const handleClick = (index) => {
    doMove(index)
  }

  return (
    <div className='game'>
      {gameState.board.map((e, index) => {
        const winnerCell = gameState.winnerShape.some(e => e === index)
        return (
          <Square
            key={index}
            isWinner={gameState.winner && winnerCell}
            onPush={() => handleClick(index)}
          >
            {e}
          </Square>
        )
      })}
    </div>
  )
}
