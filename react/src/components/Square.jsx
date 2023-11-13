export function Square ({ isWinner, isSelected, children, onPush }) {
  const winnerClass = isWinner === null ? '' : isWinner ? 'winner' : 'no-winner'
  const selectedClass = isSelected && 'is-selected'
  const cellClass = `cell ${winnerClass} ${selectedClass}`

  return (
    <button
      className={cellClass}
      onClick={onPush}
    >{children}
    </button>
  )
}
