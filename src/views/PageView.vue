<template>
  <section id="section_hero_wrapper" class="section-hero-wrapper">
    <Hero />
  </section>
  <main class="main-content container">
    <section id="section_about_wrapper" class="section-about-wrapper">
      <About />
    </section>
  </main>
</template>

<script>
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'

export default {
  components: {
    Hero, About
  },
}
</script>
