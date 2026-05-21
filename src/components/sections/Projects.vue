<template>
    <div id="projects" class="section projects-section container">
        <div class="section-head">
            <h3 class="section-head-title">&lt; Projects /&gt;</h3>
            <hr/>
        </div>
        <div class="section-body">
            <div class="project-show-container">
                <div v-for="project in projects" :key="project.id" class="card project-show-column">
                    <div class="module-head">

                    </div>
                    <div class="module-body">
                        <div class="project-show-column__info text-center">
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
                    name: 'Personal Website',
                    description: 'A personal website built with Vue.js and Tailwind CSS to showcase my skills',
                    github: 'https://github.com/spatrik2001/personal-website',
                    demo_link: 'https://patrikscheuer.hu'
                },
                {
                    id: 'webshop',
                    name: 'Webshop',
                    description: 'A webshop built with Vue.js, Node.js and MongoDB to demonstrate my full-stack development skills',
                    github: 'https://github.com/spatrik2001/Webshop',
                    demo_link: ''
                },
                {
                    id: 'third-project',
                    name: 'Coming soon',
                    description: 'A new project is in the works, stay tuned for updates!',
                    github: '',
                    demo_link: ''
                }
            ]
        }
    }
}
</script>