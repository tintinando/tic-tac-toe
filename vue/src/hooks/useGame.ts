import TicTacToe from '../logic/tictactoe'
import { onMounted, ref, reactive } from 'vue'
import { randomIcons } from '@/helpers/randomIcons'

interface GameMethods {
  doMove: (index: number) => void
  newGame: (options?: { redefineIcons: boolean }) => void
  setCustomIcons: (icons: { x: string; o: string }) => void
  setRandomIcons: () => void
  gameState:{
    board: Array<null | string>
    turn: string
    end: boolean
    winner: string
    winnerShape: number[]
    customIcons: { x: string; o: string }  
  }
}

export function useGame({ random }: { random?: boolean }): GameMethods  {
  const game = ref(TicTacToe())

  const gameState = reactive({
    board: Array(9).fill(null),
    turn: '',
    end: false,
    winner: '',
    winnerShape: [0],
    customIcons: { x: 'x', o: 'o' }
  })

  const setStateFromLogic = () => {
    const logicState = game.value.getState()
    const board = game.value.getBoard()
    Object.assign(gameState, {
      ...gameState,
      board,
      turn: logicState.turn,
      end: logicState.end,
      winner: logicState.winner,
      winnerShape: logicState.winnerShape
    })
  }

  const doMove = (index: number) => {
    game.value.doMove(index)
    setStateFromLogic()
  }

  const setCustomIcons = (icons: { x: string; o: string }) => {
    game.value.setCustomIcons(icons)
    gameState.customIcons = icons
  }

  const setRandomIcons = (): void => {
    const icons = randomIcons()
    setCustomIcons({
      x: icons[0],
      o: icons[1]
    })
    setStateFromLogic()
  }

  const newGame = (options?: { redefineIcons: boolean }): void => {
    game.value.newGame()
    if (options && options.redefineIcons) {
      setRandomIcons()
    }
    setStateFromLogic()
  }

  onMounted(() => {
    if (random) setRandomIcons()
  })

  return {
    doMove,
    setCustomIcons,
    setRandomIcons,
    newGame,
    gameState
  }
}
