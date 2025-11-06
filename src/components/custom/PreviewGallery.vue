<template>
  <h2>Relatos</h2>
  <div class="gallery">
    <div class="gallery__item brief">
      <h2>{{ currentPerson.name }}</h2>

      <p>
        {{ currentPerson.brief }}
      </p>
    </div>

    <!-- Área da imagem principal -->
    <div class="gallery__item preview">
      <img :src="currentPerson.image" alt="Imagem selecionada" />
    </div>

    <!-- Thumbnails -->
    <div class="gallery__item thumbnails">
      <div
        v-for="(people, index) in peoples"
        :key="index"
        class="thumbnails__thumb"
        :class="{ active: currentIndex === index }"
        @click="selectPerson(index)"
      >
        <img :src="people.image" alt="Miniatura" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const peoples = ref([
  {
    name: 'Ana Souza',
    brief:
      'A experiência com a fotógrafa foi incrível! Ela conseguiu capturar momentos que jamais esqueceremos. Recomendo totalmente para quem quer fotos autênticas e cheias de emoção.',
    image: './images/photos/clients/photo-1.jpg',
  },
  {
    name: 'Bruno Lima',
    brief:
      'Trabalho profissional e super atencioso. As fotos ficaram perfeitas e a entrega foi rápida. Sem dúvida, uma escolha acertada para qualquer tipo de ensaio.',
    image: './images/photos/clients/photo-3.jpg',
  },
  {
    name: 'Carla Mendes',
    brief:
      'A sessão foi muito divertida e leve. Ela soube deixar todos à vontade e capturar sorrisos naturais. Estou apaixonada pelo resultado final!',
    image: './images/photos/clients/photo-10.jpg',
  },
  {
    name: 'Daniel Rocha',
    brief:
      'Fotos com uma sensibilidade incrível! Cada clique transmite emoção e personalidade. Super recomendo para quem quer algo único e memorável.',
    image: './images/photos/clients/photo-4.jpg',
  },
  {
    name: 'Elisa Fernandes',
    brief:
      'Excelente profissional! Transformou nosso ensaio em uma experiência divertida e cheia de criatividade. As fotos ficaram lindas e cheias de vida.',
    image: './images/photos/clients/photo-11.jpg',
  },
  {
    name: 'Fábio Costa',
    brief:
      'Muito satisfeito com o ensaio! A fotógrafa é super organizada, atenciosa e tem um olhar artístico incrível. As fotos ficaram maravilhosas.',
    image: './images/photos/clients/photo-5.jpg',
  },
])

const currentIndex = ref(0)
const currentPerson = ref(peoples.value[currentIndex.value])

function selectPerson(index: number) {
  currentIndex.value = index
  currentPerson.value = peoples.value[index]
}
</script>

<style lang="scss" scoped>
@use '/src/assets/css/partials/variables' as *;

.gallery {
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: var(--density);
  margin: 0 auto;

  &__item {
    max-height: 50vh;
    flex: 1;
  }
}

.brief {
  h2 {
    margin: 0;
  }
  text-overflow: ellipsis;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    max-height: 70vh;
    object-fit: cover;
    object-position: top;
  }
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 120px;
  overflow-y: auto;

  &__thumb {
    min-width: 100px;
    min-height: 100px;
    cursor: pointer;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid transparent;
    transition: border-color 0.2s ease;

    &.active {
      border-color: #42b883;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
    }
  }
}

/* Responsivo */
@media (max-width: $breakpoint-md) {
  .gallery {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: var(--density);
    margin: 0 auto;

    &__item {
      flex: 1;
    }
  }

  .preview {
    order: 1;
  }

  .thumbnails {
    order: 3;
    flex-direction: row;
    width: 100%;
    max-width: none;
  }

  .brief {
    order: 2;
    text-align: center;
  }
}
</style>
