import { Square } from './Square'

export function Game ({ game, board, setBoard, gameState, setGameState }) {
  const handleClick = (index) => {
    game.current.doMove(index)
    setBoard(game.current.getBoard())
    setGameState(game.current.getState())
  }

  return (
    <div className='game'>
      {board.map((e, index) => {
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
