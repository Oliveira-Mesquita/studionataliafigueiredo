import type { Directive } from 'vue'

const ScrollReveal: Directive = {
  mounted(el, binding) {
    el.classList.add('sr-hidden')

    const defaultOptions = {
      distance: '20px',
      origin: 'bottom',
      duration: 600,
      delay: 0,
      easing: 'ease-out',
      threshold: 0.1,
      once: true,
      ...binding.value,
    }

    el.style.transition = `all ${defaultOptions.duration}ms ${defaultOptions.easing} ${defaultOptions.delay}ms`
    el.style.opacity = '0'
    el.style.transform = `translate${defaultOptions.origin === 'top' || defaultOptions.origin === 'bottom' ? 'Y' : 'X'}(${defaultOptions.origin === 'top' || defaultOptions.origin === 'left' ? '-' : ''}${defaultOptions.distance})`

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1'
            el.style.transform = 'translate(0,0)'
            if (defaultOptions.once) obs.unobserve(el)
          }
        })
      },
      { threshold: defaultOptions.threshold },
    )

    observer.observe(el)
  },
}

export default ScrollReveal
