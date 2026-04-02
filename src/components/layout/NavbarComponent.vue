<template>
  <nav class="portfolio-navbar">
    <span class="portfolio-navbar_logo">Scheuer Patrik</span>
    <ul class="portfolio-navbar_links">
      <li>
        <a
          href="#home"
          class="navbar-link"
          :class="{ active: activeMenu === 'home' }"
          @click="activeMenu = 'home'"
          >Home</a
        >
      </li>
      <li>
        <a
          href="#about"
          class="navbar-link"
          :class="{ active: activeMenu === 'about' }"
          @click="activeMenu = 'about'"
          >About</a
        >
      </li>
      <li>
        <a
          href="#skills"
          class="navbar-link"
          :class="{ active: activeMenu === 'skills' }"
          @click="activeMenu = 'skills'"
          >Skills</a
        >
      </li>
      <li>
        <a
          href="#projects"
          class="navbar-link"
          :class="{ active: activeMenu === 'projects' }"
          @click="activeMenu = 'projects'"
          >Projects</a
        >
      </li>
      <li>
        <a
          href="#contact"
          class="navbar-link"
          :class="{ active: activeMenu === 'contact' }"
          @click="activeMenu = 'contact'"
          >Contact</a
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const activeMenu = ref('home')
</script>
