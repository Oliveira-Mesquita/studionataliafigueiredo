<template>
  <section class="hero">
    <div class="hero__overlay"></div>

    <div class="hero__content">
      <h1 class="hero__title">Natália Figueiredo</h1>
      <p class="hero__subtitle">Slogan</p>
      <LiquidButton label="Agendar Ensaio"></LiquidButton>
      <!--      <button @click="scrollToPortfolio">Ação</button>-->
    </div>
  </section>
</template>

<script setup lang="ts">
import LiquidButton from '@/components/LiquidButton.vue'

function scrollToPortfolio() {
  const section = document.getElementById('portfolio')
  section?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: calc(100vh - var(--header-height) - 200px);
  width: 100%;
  background: url('/images/photos/self/photo-1.jpg') top/cover no-repeat;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #fff;
  overflow: hidden;

  &__overlay {
    position: absolute;
    inset: 0;
    //background: rgba(0, 0, 0, 0.45);
    //backdrop-filter: blur(2px);
  }

  &__content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 600px;
    padding: 0 20px;
    margin: 0 100px;
  }

  &__title {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
}
</style>
