<template>
  <section id="contact" class="contact">
    <h2 class="title">Entre em Contato</h2>
    <p class="subtitle">
      Tem um projeto, um momento especial ou quer apenas saber mais?
      <br />
      Envie uma mensagem e vamos conversar
    </p>

    <form class="contact-form" @submit.prevent="sendMessage">
      <div class="input-group">
        <input v-model="form.name" type="text" placeholder="Seu nome" required />
        <input v-model="form.email" type="email" placeholder="Seu e-mail" required />
      </div>

      <textarea
        v-model="form.message"
        rows="5"
        placeholder="Escreva sua mensagem..."
        required
      ></textarea>

      <button type="submit" class="submit-btn">Enviar Mensagem</button>

      <p v-if="sent" class="success">✨ Mensagem enviada com sucesso!</p>
    </form>
  </section>
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

<style scoped>
.contact {
  background-color: #f8f8f8;
  padding: 5rem 1.5rem;
  text-align: center;
  color: #222;
}

.title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
}

.input-group input,
textarea {
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.3s;
}

.input-group input:focus,
textarea:focus {
  border-color: #42b883;
}

.submit-btn {
  background-color: #42b883;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.2s;
}

.submit-btn:hover {
  background-color: #2f8f6f;
  transform: translateY(-2px);
}

.success {
  margin-top: 1.5rem;
  color: #2f8f6f;
  font-weight: 600;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  font-size: 1.6rem;
}

.social-links a {
  color: #444;
  transition:
    color 0.3s,
    transform 0.2s;
}

.social-links a:hover {
  color: #42b883;
  transform: translateY(-3px);
}

/* Responsivo */
@media (min-width: 600px) {
  .input-group {
    flex-direction: row;
  }

  .input-group input {
    flex: 1;
  }
}
</style>
