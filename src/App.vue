<script setup lang="ts">
import Header from '@/components/Header.vue'
import '@/assets/css/global.scss'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
import { ref } from 'vue'
import PreviewGallery from '@/components/custom/PreviewGallery.vue'
import Hero from '@/components/custom/Hero.vue'
import Contact from '@/components/custom/Contact.vue'

const showMenu = ref(false)

function openMenu() {
  showMenu.value = true
}
</script>

<template>
  <Menu v-model="showMenu"></Menu>
  <Header @open-menu="openMenu"></Header>

  <main>
    <hero />

    <!-- Sobre mim -->
    <section class="container content">
      <div class="presentation">
        <div class="presentation__image-container">
          <img class="presentation__image" src="https://picsum.photos/1920/1080" alt="" />
        </div>
        <div class="presentation__info">
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto at commodi,
            deleniti dicta dolor doloremque esse et, illum ipsum iure non porro praesentium
            quibusdam recusandae soluta suscipit ullam vel veniam veritatis? Dignissimos dolor ea
            ipsam minima qui quod similique? Expedita iusto magnam nisi pariatur quas voluptatem?
            Aliquid amet aperiam architecto asperiores aspernatur at blanditiis cumque debitis
            deleniti doloribus earum esse facilis fuga ipsa iure maxime non porro possimus quia
            quos, ratione reiciendis, repellat repellendus saepe sapiente similique tempora tenetur
            velit veniam voluptate! A aliquid assumenda beatae ipsa minima molestias nam
            necessitatibus nostrum odit, quae quas quo quod, sint tenetur.
          </p>
        </div>
      </div>
    </section>

    <!-- Galeria -->
    <section class="container container--primary">
      <PreviewGallery />
    </section>

    <!-- Contato -->
    <section class="container">
      <Contact />
    </section>
  </main>

  <Footer />
</template>

<style scoped lang="scss">
main {
  padding-top: calc(var(--header-height) + 30px);
  margin: 0 auto;
}

.container {
  padding: 50px 0;

  > * {
    max-width: var(--content-container);
    margin: auto;
    padding: 0 30px;
  }

  &--primary {
    background-color: var(--primary-surface);
  }
}

.content {
  &__carrousel {
    display: flex;
    justify-content: start;
    align-items: start;
    width: 100%;
    background: url('https://picsum.photos/1920/1080');
    background-size: cover;
    padding: 30px;
    border-radius: 5px;
  }

  &__ad {
    width: 50%;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: start;
  }
}

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

// nativos

button {
  cursor: pointer;
  width: fit-content;
  background-color: #536b80;
  color: white;
  border: none;
  padding: 20px 30px;
  border-radius: 5px;
  text-transform: uppercase;
}
</style>
