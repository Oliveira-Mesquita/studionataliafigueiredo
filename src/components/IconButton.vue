<script setup lang="ts">
defineProps({
  iconName: {
    type: String,
    default: 'menu',
  },
})
</script>

<template>
  <button class="icon">
    <img class="icon__image" :src="`/src/assets/icons/${iconName}.svg`" alt="" />
  </button>
</template>

<style scoped lang="scss">
.icon {
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: var(--primary);
  border: none;
  border-radius: 50%;
  padding: 10px;

  &__image {
    width: 30px;
    fill: white;
  }
}
</style>
