export function randomIcons () {
  const icons = ['🍕', '🍔', '🍟', '🍿', '🥟', '🍋', '🍉', '🍆', '🍒', '🐮', '🐸', '🦄', '🐔', '🐵', '🐶', '🐷', '🐏', '🦔', '🐇', '🦕']

  const index1 = Math.floor(Math.random() * 20)
  let index2 = Math.floor(Math.random() * 20)

  while (index1 === index2) index2 = Math.floor(Math.random() * 20)

  return [icons[index1], icons[index2]]
}
