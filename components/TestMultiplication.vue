<script lang="ts" setup>
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
