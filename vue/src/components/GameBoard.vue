<template>
  <div class="game">
    <SquareGame
      :key="index"
      v-for="(item, index) in gameState.board"
      :isWinner="gameState.winnerShape.includes(index)"
      :index="index"
      @click="handleClick(index)"
    >
      {{ item }}
    </SquareGame>
  </div>
</template>

<script lang="ts" setup>
import SquareGame from './SquareGame.vue'

const { doMove, gameState } = defineProps(['doMove', 'gameState'])

const handleClick = (index: number) => {
  doMove(index)
}
</script>
