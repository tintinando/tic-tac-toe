<template>
    <div class="hold-button-container">
        <button @mousedown="handleMouseDown" @touchstart="handleMouseDown" @mouseup="handleMouseup"
            @touchend="handleMouseup" @mouseleave="handleMouseup">
            <slot></slot>
        </button>
        <div v-if="showProgressBar" class="progress-bar" :style="{ animationDuration: time + 'ms' }"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const { handleClick, time } = defineProps(['handleClick', 'time'])

const refTimer = ref(0)
const showProgressBar = ref(false)

const handleMouseDown = () => {
    if (time === 0) {
        handleClick()
        return
    }
    showProgressBar.value = true
    refTimer.value = setTimeout(() => {
        clearInterval(refTimer.value)
        handleClick()
    }, time)
}

const handleMouseup = () => {
    clearTimeout(refTimer.value)
    showProgressBar.value = false
}
</script>

<style scoped>
.hold-button-container {
    display: flex;
    flex-direction: column;
    gap: 4px
}

.hold-button-container button {
    cursor: pointer;
    margin: 0;
}

.progress-bar {
    height: 6px;
    width: 100%;
    background-color: #4caf50;
    border-radius: 3px;
    transform-origin: top left;
    transform: scaleX(0);
    animation-name: progress-bar;
    animation-timing-function: linear;
}

@keyframes progress-bar {
    to {
        transform: scaleX(1)
    }
}
</style>