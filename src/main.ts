import { createApp } from 'vue'
import App from './App.vue'
import ScrollReveal from './directives/ScrollReveal.ts'

createApp(App).directive('scroll-reveal', ScrollReveal).mount('#app')
