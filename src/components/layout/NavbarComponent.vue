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
                <router-link to="#" class="navbar-link" :class="{ active: activeMenu === 'home' }" @click="activeMenu = 'home'" @click.prevent="scrollToSection('home')">Home</router-link>
            </li>
            <li>
                <router-link to="#" class="navbar-link" :class="{ active: activeMenu === 'about' }" @click="activeMenu = 'about'" @click.prevent="scrollToSection('about')">About</router-link>
            </li>
            <li>
                <router-link to="#" class="navbar-link" :class="{ active: activeMenu === 'skills' }" @click="activeMenu = 'skills'" @click.prevent="scrollToSection('skills')">Skills</router-link>
            </li>
            <li>
                <router-link to="#" class="navbar-link" :class="{ active: activeMenu === 'projects' }" @click="activeMenu = 'projects'" @click.prevent="scrollToSection('projects')">Projects</router-link>
            </li>
            <li>
                <router-link to="#" class="navbar-link" :class="{ active: activeMenu === 'contact' }" @click="activeMenu = 'contact'" @click.prevent="scrollToSection('contact')">Contact</router-link>
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
        },
        scrollToSection(sectionId) {
            if (sectionId == 'home') {
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0
                });
                return;
            }

            const link = document.getElementById(sectionId);
            if (link) {
                link.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
}
</script>