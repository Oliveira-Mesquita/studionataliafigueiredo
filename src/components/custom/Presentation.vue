<template>
  <div class="presentation">
    <!-- Imagem -->
    <div class="presentation__image-container">
      <img class="presentation__image" src="https://picsum.photos/1920/1080" alt="" />
    </div>

    <!-- Descrição -->
    <div class="presentation__info description">
      <h2>Sobre Mim</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto at commodi, deleniti
        dicta dolor doloremque esse et, illum ipsum iure non porro praesentium quibusdam recusandae
        soluta suscipit ullam vel veniam veritatis? Dignissimos dolor ea ipsam minima qui quod
        similique? .
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '/src/assets/css/partials/variables' as *;

.presentation {
  display: flex;
  justify-content: space-between;
  gap: calc(var(--density) * 1.5);

  &__image-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: fit-content;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
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
