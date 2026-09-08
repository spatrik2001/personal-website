<template>
    <footer class="portfolio-footer">
        <div class="portfolio-footer-container container mx-auto">
            <div class="portfolio-footer-row">
                <div class="portfolio-footer-row__info">
                    <h3 class="portfolio-footer-title">Patrik Scheuer</h3>
                    <h4 class="portfolio-footer-subtitle">Full-Stack Web Developer</h4>
                </div>
                <div class="portfolio-footer-row__sections">
                    <ul>
                        <li><a class="transition-colors duration-[0.15s] ease-in-out hover:text-[#FBAE3C]" href="#" @click.prevent="scrollToSection('about')">About</a></li>
                        <li><a class="transition-colors duration-[0.15s] ease-in-out hover:text-[#FBAE3C]" href="#" @click.prevent="scrollToSection('skills')">Skills</a></li>
                        <li><a class="transition-colors duration-[0.15s] ease-in-out hover:text-[#FBAE3C]" href="#" @click.prevent="scrollToSection('projects')">Projects</a></li>
                        <li><a class="transition-colors duration-[0.15s] ease-in-out hover:text-[#FBAE3C]" href="#" @click.prevent="scrollToSection('contact')">Contact</a></li>
                    </ul>
                </div>
                <div class="portfolio-footer-row__contacts">
                    <a v-for="link in links" :key="link.id" :href="link.href" target="_blank"><img :src="link.icon" :alt="link.title"></a>
                </div>
            </div>
            <hr/>
            <div class="portfolio-footer-row">
                <p>&copy; {{ new Date().getFullYear() }} Patrik Scheuer</p>
                <div class="portfolio-footer-row__totop" @click.prevent="toTop()">
                    <a href="#" aria-label="portfolioScroll"><img :src="iconToTop" alt="To top"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import iconEmail from '@/assets/img/icon-email.svg';
import iconLinkedIn from '@/assets/img/icon-linkedin.svg';
import iconGitHub from '@/assets/img/icon-github.svg';
import iconToTop from '@/assets/img/icon-totop.svg';
export default {
    data() {
        return {
            links: [
                { id: 'linkedin', icon: iconLinkedIn, title: 'LinkedIn', href: 'https://www.linkedin.com/in/patrik-scheuer/' },
                { id: 'github', icon: iconGitHub, title: 'GitHub', href: 'https://github.com/spatrik2001' },
                { id: 'email', icon: iconEmail, title: 'Email', href: 'mailto:scheuer.patrik@gmail.com' },
            ],
            iconToTop
        }
    },
    methods: {
        toTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        scrollToSection(sectionId) {
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