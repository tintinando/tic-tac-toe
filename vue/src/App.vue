<script setup lang="ts">
import GameBoard from './components/GameBoard.vue';
import GameFooter from './components/GameFooter.vue';
import { useGame } from './hooks/useGame';

const {doMove, newGame, gameState} = useGame({random:true})
</script>

<template>
  <h1>Tic-tac-toe</h1>
  <div class="container">
    <GameBoard
      :doMove="doMove"
      :gameState="gameState"    
    />
    <GameFooter
      :gameState="gameState"
      :newGame="newGame"
    />
  </div>

</template>