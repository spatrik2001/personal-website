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
                                <a class="contact-container-card__link" v-if="contact.href" :href="contact.href" target="_blank">{{ contact.text }}</a>
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
                        <form @submit.prevent="handleSubmit" class="contact-container__form">
                            <input type="checkbox" name="botcheck" class="hidden" style="display: none;" v-model="form.botcheck">

                            <label for="name">Your Name</label>
                            <input type="text" v-model="form.name" id="name" placeholder="Your Name..." required>

                            <label for="email">Your Email</label>
                            <input type="email" v-model="form.email" id="email" placeholder="xyz@gmail.com" required>

                            <label for="message">Your Message</label>
                            <textarea v-model="form.message" id="message" class="min-h-[120px]" placeholder="Dear Sir/Madam, Good day!..." required></textarea>

                            <button type="submit" class="contact-container__form-button" :disabled="isSubmitting">
                                {{ isSubmitting ? 'Sending...' : 'Send' }}
                            </button>

                            <p v-if="statusMessage" :class="['text-sm text-center mt-2', isSuccess ? 'text-green-600' : 'text-red-600']">
                                {{ statusMessage }}
                            </p>
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
                { id: 'email', icon: iconEmail, title: 'Email', text: 'scheuer.patrik@gmail.com', href: 'mailto:scheuer.patrik@gmail.com' },
                { id: 'linkedin', icon: iconLinkedIn, title: 'LinkedIn', text: 'patrik-scheuer', href: 'https://www.linkedin.com/in/patrik-scheuer-022b1a3b0/' },
                { id: 'github', icon: iconGitHub, title: 'GitHub', text: 'spatrik2001', href: 'https://github.com/spatrik2001' },
                { id: 'location', icon: iconLocation, title: 'Location', text: 'Győr, Hungary' }
            ],
            form: {
                name: '',
                email: '',
                message: '',
                botcheck: false
            },
            isSubmitting: false,
            statusMessage: '',
            isSuccess: false
        }
    },
    methods: {
        async handleSubmit() {
            // If the botcheck checkbox is checked, we assume it's a bot submission and do not proceed
            if (this.form.botcheck) return;

            this.isSubmitting = true;
            this.statusMessage = '';

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: import.meta.env.VITE_ACCESS_KEY,
                        name: this.form.name,
                        email: this.form.email,
                        message: this.form.message,
                        subject: `New Portfolio Message from ${this.form.name}`
                    })
                });

                const result = await response.json();

                if (result.success) {
                    this.isSuccess = true;
                    this.statusMessage = 'Thank you! Your message has been sent successfully.';

                    // Form reset after successful submission
                    this.form.name = '';
                    this.form.email = '';
                    this.form.message = '';
                } else {
                    throw new Error(result.message);
                }
            } catch (error) {
                this.isSuccess = false;
                this.statusMessage = 'Something went wrong. Please try again later.';
            } finally {
                this.isSubmitting = false;
            }
        }
    }
}
</script>