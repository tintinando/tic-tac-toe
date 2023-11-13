// Módulo con la lógica del juego TicTacToe

function TicTacToe () {
  const board = Array(9)
  let currentTurn
  let state // x, o, winner, tie

  // default values
  const initializeGame = () => {
    currentTurn = 'x'
    state = {
      turn: currentTurn,
      end: false,
      winner: null,
      winnerShape: []
    }
    board.fill(null)
  }
  initializeGame()

  // constants
  let CUSTOM_ICONS = {
    x: 'X',
    o: 'O'
  }

  const WINNER_SHAPES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  // configurations
  const setCustomIcons = (newIcons) => {
    CUSTOM_ICONS = { ...CUSTOM_ICONS, ...newIcons }
  }

  // helpers
  const changeTurn = () => {
    currentTurn = currentTurn === 'x' ? 'o' : 'x'
    state.turn = currentTurn
  }

  const checkWinner = () => {
    for (let i = 0; i < WINNER_SHAPES.length; i++) {
      const [a, b, c] = WINNER_SHAPES[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        state.winnerShape = WINNER_SHAPES[i]
        return true
      }
    }
    return false
  }

  // methods
  const getBoard = () => {
    return board.map(i => CUSTOM_ICONS[i])
  }

  const getState = () => state

  const getCustomIcons = () => CUSTOM_ICONS

  const doMove = (index) => {
    if (state.end) return
    if (index < 0 || index > 8) throw new Error('Index error')
    if (board[index]) return
    board[index] = currentTurn

    if (checkWinner()) {
      state.winner = CUSTOM_ICONS[currentTurn]
      state.end = true
    } else if (board.every(e => e !== null)) {
      state.end = true
    } else {
      changeTurn()
    }
  }

  const newGame = () => {
    initializeGame()
  }

  return {
    getBoard,
    getState,
    getCustomIcons,
    setCustomIcons,
    doMove,
    newGame
  }
}

export default TicTacToe
