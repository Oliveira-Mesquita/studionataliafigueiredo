<script setup lang="ts"></script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="#">Coiso</a></li>
        <li><a href="#">Coiso</a></li>
        <li><img src="https://picsum.photos/100/100" /></li>
        <li><a href="#" class="active">Coiso</a></li>
        <li><a href="#">Coiso</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  height: var(--header-height);

  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 1rem;

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
  }

  li > img {
    width: 48px;
  }

  li > a {
    color: var(--text-muted);
    text-decoration: none;

    &.active {
      color: var(--primary);
      text-decoration: underline;
    }
  }
}
</style>
