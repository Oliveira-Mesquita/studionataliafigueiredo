<template>
  <div class="gallery">
    <!-- Área da imagem principal -->
    <div class="preview">
      <img :src="currentImage" alt="Imagem selecionada" />
    </div>

    <!-- Thumbnails -->
    <div class="thumbnails">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="thumb"
        :class="{ active: currentIndex === index }"
        @click="selectPhoto(index)"
      >
        <img :src="photo" alt="Miniatura" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Lista de imagens — pode ser passada por prop também
const photos = ref([
  'https://picsum.photos/id/1011/800/600',
  'https://picsum.photos/id/1015/800/600',
  'https://picsum.photos/id/1021/800/600',
  'https://picsum.photos/id/1025/800/600',
  'https://picsum.photos/id/1032/800/600',
])

const currentIndex = ref(0)
const currentImage = ref(photos.value[currentIndex.value])

function selectPhoto(index: number) {
  currentIndex.value = index
  currentImage.value = photos.value[index]
}
</script>

<style scoped>
.gallery {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 0 auto;
}

.preview {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  border-radius: 12px;
  overflow: hidden;
}

.preview img {
  width: 100%;
  height: auto;
  max-height: 70vh;
  object-fit: cover;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 120px;
  overflow-y: auto;
  max-height: 70vh;
}

.thumb {
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid transparent;
  transition: border-color 0.2s ease;
}

.thumb img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  display: block;
}

.thumb.active {
  border-color: #42b883;
}
</style>
