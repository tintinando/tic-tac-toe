<template>
  <button :class="className">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'

// todo: check isSelected
const props = defineProps(['isWinner', 'isSelected'])

const className = computed(() => {
  return `cell ${props.isWinner === true ? 'winner' : props.isSelected === true ? 'is-selected' : ''}`
})
</script>
