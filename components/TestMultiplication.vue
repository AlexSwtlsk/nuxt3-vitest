<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  count: {
    type: Number,
    default: 1,
  },
})

const countMultiplication = computed(() => props.count * 4)
</script>

<template>
  <div>
    {{ countMultiplication }}
  </div>
</template>
