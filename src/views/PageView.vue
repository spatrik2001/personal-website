<template>
  <section id="section_hero_wrapper" class="section-hero-wrapper">
    <Hero />
  </section>
  <main class="main-content container">
    <section id="section_about_wrapper" class="section-about-wrapper">
      <About />
    </section>
    <seciton id="section_skills_wrapper" class="section-skills-wrapper">
      <Skills />
    </seciton>
  </main>
</template>

<script>
import Hero from '@/components/sections/Hero.vue'
import About from '@/components/sections/About.vue'
import Skills from '@/components/sections/Skills.vue';

export default {
  components: { Hero, About, Skills },
}
</script>
