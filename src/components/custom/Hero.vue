<template>
  <section class="hero">
    <div class="overlay"></div>

    <div class="content">
      <h1 class="title">Natália Figueiredo</h1>
      <p class="subtitle">Slogan</p>
      <button class="cta" @click="scrollToPortfolio">Ação</button>
    </div>
  </section>
</template>

<script setup lang="ts">
function scrollToPortfolio() {
  const section = document.getElementById('portfolio')
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.hero {
  position: relative;
  height: 40vh;
  width: 100%;
  background: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee') center/cover
    no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
  padding: 0 20px;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.cta {
  background-color: #42b883;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
  color: #fff;
  border-radius: 40px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.cta:hover {
  background-color: #2f8f6f;
  transform: translateY(-2px);
}
</style>
