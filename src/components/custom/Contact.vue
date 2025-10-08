<template>
  <div class="contact">
    <h2 class="contact__title">Entre em Contato</h2>

    <p class="contact__subtitle">
      Tem um projeto, um momento especial ou quer apenas saber mais?
      <br />
      Envie uma mensagem e vamos conversar
    </p>

    <form class="contact__form form" @submit.prevent="sendMessage">
      <div class="form__input-group">
        <input v-model="form.name" type="text" placeholder="Seu nome" required />
        <input v-model="form.email" type="email" placeholder="Seu e-mail" required />
      </div>

      <textarea v-model="form.message" rows="5" placeholder="Escreva sua mensagem..." required />

      <button type="submit">Enviar Mensagem</button>

      <p v-if="sent" class="form__notification">✨ Mensagem enviada com sucesso!</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const sent = ref(false)

function sendMessage() {
  console.log('Mensagem enviada:', form.value)

  sent.value = true

  form.value = { name: '', email: '', message: '' }

  setTimeout(() => (sent.value = false), 4000)
}
</script>

<style lang="scss" scoped>
@use '/src/assets/css/partials/variables' as *;

.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--density);

  > * {
    width: 100%;
    margin: 0;
  }

  &__title {
    font-size: 2.2rem;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-wrap: wrap;

  & > textarea {
    flex: 1;
  }

  &__input-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: var(--density);

    input {
      flex: 1;
    }
  }

  &__notification {
    margin-top: 1.5rem;
    color: #2f8f6f;
    font-weight: 600;
  }
}

/* Responsivo */
@media (max-width: $breakpoint-md) {
  .form {
    &__input-group {
      flex-direction: column;
    }

    &__input-group input {
      flex: 1;
    }
  }
}
</style>
