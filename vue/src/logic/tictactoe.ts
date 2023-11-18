// Módulo con la lógica del juego TicTacToe

interface GameState {
  turn: string
  end: boolean
  winner: string
  winnerShape: number[]
}

interface CustomIcons {
  x: string
  o: string
}

interface TicTacToeModule {
  getBoard: () => string[]
  getState: () => GameState
  setCustomIcons: (newIcons: CustomIcons) => void
  doMove: (index: number) => void
  newGame: () => void
}

function TicTacToe(): TicTacToeModule {
  const board: ('x' | 'o' | '')[] = Array(9)

  let currentTurn: 'x' | 'o'
  let state: GameState

  // default values
  const initializeGame = () => {
    currentTurn = 'x'
    state = {
      turn: currentTurn,
      end: false,
      winner: '',
      winnerShape: []
    }
    board.fill('')
  }
  initializeGame()

  // constants
  let CUSTOM_ICONS: CustomIcons = {
    x: 'X',
    o: 'O'
  }

  const WINNER_SHAPES: number[][] = [
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
  const setCustomIcons = (newIcons: CustomIcons) => {
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
    return board.map((i) => (CUSTOM_ICONS[i as 'x' | 'o']))
  }

  const getState = () => state

  const doMove = (index:number) => {
    if (state.end) return
    if (index < 0 || index > 8) throw new Error('Index error')
    if (board[index]) return
    board[index] = currentTurn

    if (checkWinner()) {
      state.winner = CUSTOM_ICONS[currentTurn]
      state.end = true
    } else if (board.every((e) => e !== '')) {
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
    setCustomIcons,
    doMove,
    newGame
  }
}

export default TicTacToe
