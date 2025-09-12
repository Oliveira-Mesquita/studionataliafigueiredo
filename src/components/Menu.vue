<script setup lang="ts">
import IconButton from '@/components/IconButton.vue'

const shouldShow = defineModel({ type: Boolean, default: false })

const scrollTo = (id: string, offset = 80) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }

  closeMenu()
}

function closeMenu() {
  shouldShow.value = false
}
</script>

<template>
  <nav class="" :class="{ show: shouldShow }">
    <ul>
      <li><IconButton icon-name="close" @click="closeMenu"></IconButton></li>
      <li>
        <a href="javascript:void(0)" @click="scrollTo('item-1')">Coiso</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="scrollTo('item-2')">Coiso</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="scrollTo('item-3')" class="active">Coiso</a>
      </li>
      <li>
        <a href="javascript:void(0)" @click="scrollTo('item-4')">Coiso</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

nav {
  position: fixed;
  width: 100dvw;
  height: 100dvh;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    opacity 0.3s ease,
    transform 0.3s ease,
    visibility 0.3s;
  justify-content: center;
  display: flex;
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 2;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li > img {
    width: 250px;
  }

  li > a {
    color: black;
    text-decoration: none;

    &.active {
      color: var(--primary);
      text-decoration: underline;
    }
  }
}
</style>
