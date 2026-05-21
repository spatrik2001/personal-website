<template>
    <div id="skills" class="section skills-section container">
        <div class="section-head">
            <h3 class="section-head-title">&lt; Skills /&gt;</h3>
            <hr/>
        </div>
        <div class="section-body">
            <div class="skill-container">
                <div v-for="skill in skills" :key="skill.name" class="skill-container-column mx-10">
                    <div class="module-head">

                    </div>
                    <div class="module-body">
                        <div class="skill-container-column__info text-center">
                            <div class="skill-container-column__title">{{ skill.name }}</div>
                            <div class="skill-container-column__subtitle text-gray-500">{{ skill.items.join(', ') }}</div>
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
            skills: [
                {
                    name: 'Frontend',
                    items: [ 'Vue.js', 'Angular', 'Javascript', 'Tailwind' ]
                },
                {
                    name: 'Backend',
                    items: [ 'Node.js', 'Express', 'Pug', ]
                },
                {
                    name: 'Database',
                    items: ['MongoDB', 'MSSQL', 'SQLite', 'Firestore']
                },
                {
                    name: 'Tools',
                    items: ['Docker', 'Git', 'Visual Studio Code', 'Postman']
                }
            ]
        }
    }
}
</script>