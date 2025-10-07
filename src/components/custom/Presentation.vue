<script setup lang="ts"></script>

<template>
  <div class="presentation">
    <div class="presentation__image-container">
      <img class="presentation__image" src="https://picsum.photos/1920/1080" alt="" />
    </div>
    <div class="presentation__info">
      <h2>Sobre Mim</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto at commodi, deleniti
        dicta dolor doloremque esse et, illum ipsum iure non porro praesentium quibusdam recusandae
        soluta suscipit ullam vel veniam veritatis? Dignissimos dolor ea ipsam minima qui quod
        similique? Expedita iusto magnam nisi pariatur quas voluptatem? Aliquid amet aperiam
        architecto asperiores aspernatur at blanditiis cumque debitis deleniti doloribus earum esse
        facilis fuga ipsa iure maxime non porro possimus quia quos, ratione reiciendis, repellat
        repellendus saepe sapiente similique tempora tenetur velit veniam voluptate! A aliquid
        assumenda beatae ipsa minima molestias nam necessitatibus nostrum odit, quae quas quo quod,
        sint tenetur.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.presentation {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  &__image-container {
    flex: 1;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
  }

  &__image {
    object-fit: cover;
    width: 100%;
  }

  &__info {
    display: flex;
    flex: 2;
    flex-direction: column;
  }
}
</style>
