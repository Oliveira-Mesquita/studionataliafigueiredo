<script setup lang="ts">
import Header from '@/components/Header.vue'
import '@/assets/css/global.scss'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
import { ref } from 'vue'
import PreviewGallery from '@/components/custom/PreviewGallery.vue'
import Hero from '@/components/custom/Hero.vue'
import Contact from '@/components/custom/Contact.vue'
import Presentation from '@/components/custom/Presentation.vue'
import { presentation } from '@/data.ts'

const showMenu = ref(false)

function toggleMenu() {
  showMenu.value = !showMenu.value
}
</script>

<template>
  <Menu v-model="showMenu"></Menu>
  <Header @toggle-menu="toggleMenu"></Header>

  <main>
    <section v-scroll-reveal>
      <Hero />
    </section>

    <!-- Sobre mim -->
    <section class="container" v-scroll-reveal>
      <Presentation
        :title="presentation.title"
        :description="presentation.description"
        :photo="presentation.photo"
      />
    </section>

    <!-- Galeria -->
    <section class="container container--primary container--full" v-scroll-reveal>
      <PreviewGallery />
    </section>

    <!-- Contato -->
    <section class="container" v-scroll-reveal>
      <Contact />
    </section>
  </main>

  <Footer />
</template>

<style scoped lang="scss">
@use '/src/assets/css/partials/variables' as *;

main {
  padding-top: calc(var(--header-height) + 30px);
  margin: 0 auto;
}

.container {
  padding: 50px 0;
  overflow-x: auto;

  > * {
    max-width: var(--content-container);
    margin: auto;
    padding: 0 30px;
  }

  &--primary {
    background-color: var(--primary-surface);
  }

  &--full {
    > * {
      max-width: calc(var(--content-container) + 100px);
      padding: 0 var(--density);
    }
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

/* Responsivo */
@media (max-width: $breakpoint-md) {
  .container {
    > * {
      padding: 0 calc(var(--density) * 2);
    }
  }
}
</style>
