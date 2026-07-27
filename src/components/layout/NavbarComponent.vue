<template>
    <nav class="portfolio-navbar">
        <span class="portfolio-navbar__logo">Patrik Scheuer</span>
        <button class="portfolio-navbar__toggle" aria-label="navbarToggler" @click="toggleMenu">
            <span :class="{ open: menuOpen }"></span>
            <span :class="{ open: menuOpen }"></span>
            <span :class="{ open: menuOpen }"></span>
        </button>
        <ul :class="['portfolio-navbar__links', { open: menuOpen }]">
            <li>
                <router-link to="#home" class="navbar-link" :class="{ active: activeMenu === 'home' }" @click="activeMenu = 'home'">Home</router-link>
            </li>
            <li>
                <router-link to="#about" class="navbar-link" :class="{ active: activeMenu === 'about' }" @click="activeMenu = 'about'">About</router-link>
            </li>
            <li>
                <router-link to="#skills" class="navbar-link" :class="{ active: activeMenu === 'skills' }" @click="activeMenu = 'skills'">Skills</router-link>
            </li>
            <li>
                <router-link to="#projects" class="navbar-link" :class="{ active: activeMenu === 'projects' }" @click="activeMenu = 'projects'">Projects</router-link>
            </li>
            <li>
                <router-link to="#contact" class="navbar-link" :class="{ active: activeMenu === 'contact' }" @click="activeMenu = 'contact'">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
const activeMenu = ref('home');
</script>

<script>
export default {
    data() {
       return {
          menuOpen: false
       }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        }
    }
}
</script>