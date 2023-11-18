<template>
  <div class="turns">
    <SquareGame :isSelected="gameState.turn === 'x'">{{ gameState.customIcons.x }}</SquareGame>
    <SquareGame>{{ gameState.customIcons.o }}</SquareGame>
  </div>
  <div class="new-game-container">
    <HoldButton
      :handleClick="handleNewGame"
      :time="300"
    >
      Nuevo juego
    </HoldButton>
    <label>
      Nuevos íconos
      <input
        v-model="newIconsCheck"
        type="checkbox"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import SquareGame from './SquareGame.vue'
import HoldButton from './holdButton.vue'

const props = defineProps(['gameState', 'newGame'])

const newIconsCheck = ref(true)

const handleNewGame = () => {
  props.newGame({ redefineIcons: newIconsCheck.value })
}
</script>
