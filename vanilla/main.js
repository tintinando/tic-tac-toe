import TicTacToe from './tictactoe.mjs'

const game = TicTacToe()
game.setCustomIcons({ x: '🐵', o: '👽' })

const containerDOM = document.querySelector('.container')
const gameDOM = containerDOM.querySelector('.game')

// render board
for (let i = 0; i < 9; i++) {
  const node = document.createElement('div')
  node.classList = 'cell'
  node.setAttribute('index', i)
  gameDOM.appendChild(node)
}

const renderWinner = (state) => {
  const node = document.createElement('div')
  node.id = 'winner-show'
  node.textContent = `Ha ganado: ${state.winner}`
  containerDOM.appendChild(node)
}

const updateBoard = (state) => {
  const cells = gameDOM.querySelectorAll('.cell')
  game.getBoard().forEach((e, index) => {
    cells[index].textContent = e
    if (state.winner) {
      if (state.winnerShape.some(s => s === index)) {
        cells[index].classList.add('winner')
      } else {
        cells[index].classList.add('no-winner')
      }
    } else {
      cells[index].classList.remove('winner')
      cells[index].classList.remove('no-winner')
      containerDOM.querySelector('#winner-show')?.remove()
    }
  })
  if (state.winner) renderWinner(state)
}

const handleClickCell = (index) => {
  game.doMove(index)
  updateBoard(game.getState())
}

// eventos
const cellDOM = gameDOM.querySelectorAll('.cell')
cellDOM.forEach(cell => {
  cell.addEventListener('click', (e) => handleClickCell(e.target.getAttribute('index')))
})

containerDOM.querySelector('#new-game').addEventListener('click', (e) => {
  e.preventDefault()
  game.newGame()
  updateBoard(game.getState())
})
