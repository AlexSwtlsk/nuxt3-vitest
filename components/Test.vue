<script lang="ts" setup>
const props = defineProps({
  count: {
    type: Number,
    default: 1,
  },
})

const countMultipliction = computed(() => props.count * 4)
</script>

<template>
  <div>
    {{ countMultipliction }}
  </div>
</template>
