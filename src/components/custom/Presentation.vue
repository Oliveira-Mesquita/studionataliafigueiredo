<template>
  <div class="presentation">
    <!-- Imagem -->
    <div class="presentation__image-container">
      <img class="presentation__image" :src="photo" alt="" />
    </div>

    <!-- Descrição -->
    <div class="presentation__info description">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
@use '/src/assets/css/partials/variables' as *;

.presentation {
  display: flex;
  justify-content: space-between;
  gap: calc(var(--density) * 2);

  &__image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 10px;
  }

  &__info {
    display: flex;
    flex: 2;
    flex-direction: column;
  }
}

.description {
  display: flex;
  flex-direction: column;
  gap: var(--density);
  white-space: wrap;

  > * {
    margin: 0;
  }
}

/* Responsivo */
@media (max-width: $breakpoint-md) {
  .presentation {
    flex-direction: column;
    gap: var(--density);

    &__image {
      width: 50%;
    }
  }

  .description {
    align-items: center;
  }
}
</style>
