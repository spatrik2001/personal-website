<template>
    <div id="projects" class="section projects-section container">
        <div class="section-head">
            <h3 class="section-head-title">&lt; Projects /&gt;</h3>
            <hr/>
        </div>
        <div class="section-body">
            <div class="project-show-container">
                <div v-for="project in projects" :key="project.id" class="card project-show-column hover:scale-[1.01] transform-gpu">
                    <div class="module-head">

                    </div>
                    <div class="module-body">
                        <div class="project-show-column__info text-center">
                            <img class="project-show-column__thumbnail" v-if="project.img_url" :src="project.img_url" :alt="project.name">
                            <img class="project-show-column__thumbnail" v-else src="https://picsum.photos/400/250" :alt="project.name">
                            <div class="project-show-column__title">{{ project.name }}</div>
                            <div class="project-show-column__description text-gray-500 my-5">{{ project.description }}</div>
                            <div class="project-show-column__buttons mt-6">
                                <a v-if="project.github" :href="project.github" target="_blank" class="project-show-column__button">Source Code</a>
                                <a v-if="project.demo_link" :href="project.demo_link" target="_blank" class="project-show-column__button">Live Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 'personal-website',
                    img_url: '',
                    name: 'Personal Website',
                    description: 'A personal website built with Vue.js and Tailwind CSS to showcase my skills',
                    github: 'https://github.com/spatrik2001/personal-website',
                    demo_link: 'https://patrikscheuer.hu'
                },
                {
                    id: 'webshop',
                    img_url: '',
                    name: 'Webshop',
                    description: 'A webshop built with Vue.js, Node.js and MongoDB to demonstrate my full-stack development skills',
                    github: 'https://github.com/spatrik2001/Webshop',
                    demo_link: ''
                },
                {
                    id: 'attributehub',
                    img_url: '',
                    name: 'AttributeHub',
                    description: 'A website for bakugan collectors. You can wishlist or mark them as owned.',
                    github: 'https://github.com/spatrik2001/AttributeHub',
                    demo_link: ''
                }
            ]
        }
    }
}
</script>