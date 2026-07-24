<template>
    <div id="contact" class="section contact-section container">
        <div class="section-head">
            <h3 class="section-head-title">&lt; Get in Touch /&gt;</h3>
            <p class="section-head-subtitle">Have a project or idea? Let’s connect and bring it to life together.</p>
            <hr/>
        </div>
        <div class="section-body">
            <div class="contact-container">
                <div class="contact-container-column max-w-95 md:max-w-[500px]">
                    <div class="module-head">
                        <h3 class="module-head-title mb-4">Contact Information</h3>
                    </div>
                    <div class="module-body">
                        <div class="contact-container-card" v-for="contact in contacts" :key="contact.id">
                            <img class="contact-container-card__icon" :src="contact.icon" :alt="contact.title" loading="lazy">
                            <div class="contact-container-card__info">
                                {{ contact.title }}
                                <br/>
                                <a class="contact-container-card__link" v-if="contact.href" :href="contact.href">{{ contact.text }}</a>
                                <p v-else>{{ contact.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contact-container-column max-w-95 md:max-w-[500px]">
                    <div class="module-head">
                        <h3 class="module-head-title">Send a Message</h3>
                    </div>
                    <div class="module-body">
                        <form class="contact-container__form" action="post">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Name..." required>
                            <label for="email">Your Email</label>
                            <input type="email" name="email" id="email" placeholder="xyz@gmail.com" required>
                            <label for="message">Your Message</label>
                            <textarea class="min-h-[120px]" name="message" id="message" placeholder="Dear Sir/Madam, Good day!..." required></textarea>
                            <input type="submit" value="Send a message">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import iconEmail from '@/assets/img/icon-email.svg';
import iconLinkedIn from '@/assets/img/icon-linkedin.svg';
import iconGitHub from '@/assets/img/icon-github.svg';
import iconLocation from '@/assets/img/icon-location.svg';
export default {
    data() {
        return {
            contacts: [
                {  id: 'email', icon: iconEmail, title: 'Email', text: 'scheuer.patrik@gmail.com', href: 'mailto:scheuer.patrik@gmail.com' },
                { id: 'linkedin', icon: iconLinkedIn, title: 'LinkedIn', text: 'patrik-scheuer', href: 'https://www.linkedin.com/in/patrik-scheuer-022b1a3b0/' },
                { id: 'github', icon: iconGitHub, title: 'GitHub', text: 'spatrik2001', href: 'https://github.com/spatrik2001' },
                { id: 'location', icon: iconLocation, title: 'Location', text: 'Győr, Hungary' }
            ]
        }
    }
}
</script>