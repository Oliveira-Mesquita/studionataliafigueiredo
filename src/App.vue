<script setup lang="ts">
import Header from '@/components/Header.vue'
import '@/assets/css/global.css'
import Footer from '@/components/Footer.vue'
import Menu from '@/components/Menu.vue'
import { ref } from 'vue'

const showMenu = ref(false)

function openMenu() {
  showMenu.value = true
}
</script>

<template>
  <Menu v-model="showMenu"></Menu>
  <Header @open-menu="openMenu"></Header>

  <main>
    <section class="container content">
      <div class="content__carrousel">
        <div class="content__ad">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at cupiditate
            eligendi ex labore nemo nihil odio, perferendis porro sapiente sit tempore totam ut
            voluptatem voluptates. Enim iure nesciunt sed.
          </p>
          <button>Entre em contato!</button>
        </div>
      </div>
    </section>

    <section
      v-for="i in 10"
      :key="i"
      :class="{ 'container--primary': i % 2 !== 0 }"
      class="container"
      :id="`item-${i}`"
    >
      <h1>Item {{ i }}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur dolore,
        enim est facilis harum id ipsa, ipsam libero minima nam, nihil numquam obcaecati officiis
        quae quia quis reprehenderit sed sequi vitae. Commodi dolor fuga iste nisi porro quam quod
        recusandae rerum. Ab atque autem commodi dolores dolorum, eos ex facere facilis hic ipsa
        libero maxime nesciunt, non quibusdam repellendus, sed unde voluptates voluptatum. Adipisci
        dicta distinctio ea facere nam nobis odio quasi sapiente sint totam. Autem culpa eligendi
        ex, fugit labore perspiciatis provident quia suscipit vero! Ad enim eveniet ex incidunt modi
        natus nisi, quae reiciendis sunt vel. Est?
      </p>
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
    background-color: var(--primary);
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
