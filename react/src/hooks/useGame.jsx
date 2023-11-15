import { randomIcons } from '../helpers/randomIcons'
import TicTacToe from '../logic/tictactoe.mjs'
import { useEffect, useRef, useState } from 'react'

export function useGame ({ random }) {
  const game = useRef(TicTacToe())
  const [gameState, setGameState] = useState({
    board: Array(9).fill(null),
    turn: '',
    end: false,
    winner: null,
    winnerShape: [],
    customIcons: {}
  })

  const setStateFromLogic = () => {
    const logicState = game.current.getState()
    const board = game.current.getBoard()
    setGameState((prev) => ({
      ...prev,
      board,
      turn: logicState.turn,
      end: logicState.end,
      winner: logicState.winner,
      winnerShape: logicState.winnerShape
    })
    )
  }

  const doMove = (index) => {
    game.current.doMove(index)
    setStateFromLogic()
  }

  const setCustomIcons = (icons) => {
    game.current.setCustomIcons(icons)
    setGameState(prev => ({ ...prev, customIcons: icons }))
  }

  const setRandomIcons = () => {
    const icons = randomIcons()
    setCustomIcons(
      {
        x: icons[0],
        o: icons[1]
      })
    setStateFromLogic()
  }

  const newGame = (options) => {
    game.current.newGame()
    if (options && options.redefineIcons) {
      setRandomIcons()
    }
    setStateFromLogic()
  }

  useEffect(() => {
    if (random) setRandomIcons()
  }, [])

  return {
    doMove,
    newGame,
    gameState,
    setCustomIcons,
    setRandomIcons
  }
}
