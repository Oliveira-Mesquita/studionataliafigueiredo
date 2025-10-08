<script setup lang="ts">
import IconButton from '@/components/IconButton.vue'

defineEmits(['toggleMenu'])

const scrollTo = (id: string, offset = 80) => {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset

    console.log(top)
    window.scrollTo({
      top,
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <header>
    <nav>
      <ul>
        <li class="desktop-only">
          <a href="javascript:void(0)" @click="scrollTo('item-1')">Coiso</a>
        </li>
        <li class="desktop-only">
          <a href="javascript:void(0)" @click="scrollTo('item-2')">Coiso</a>
        </li>
        <li><img src="@/assets/images/logo.png" /></li>
        <li class="desktop-only">
          <a href="javascript:void(0)" @click="scrollTo('item-3')" class="active">Coiso</a>
        </li>
        <li class="desktop-only">
          <a href="javascript:void(0)" @click="scrollTo('item-4')">Coiso</a>
        </li>
        <li class="mobile-only">
          <IconButton icon-name="menu" @click="$emit('toggleMenu')" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  height: var(--header-height);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 99;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    font-size: 25px;
    display: flex;
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
