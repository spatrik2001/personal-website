<template>
    <div id="skills" class="section skills-section container">
        <div class="section-head">
            <h3 class="section-head-title">&lt; Skills /&gt;</h3>
            <hr/>
        </div>
        <div class="section-body">
            <div class="skill-container">
                <div v-for="skill in skills" :key="skill.name" class="card skill-container-column hover:scale-[1.007] transform-gpu">
                    <div class="module-head">
                        <div class="module-head-title">{{ skill.name }}</div>
                    </div>
                    <div class="module-body">
                        <div v-for="item in skill.items" :key="item.name" class="skill-container-column__info">
                            <div class="skill-container-column__name">
                                {{ item.name }}
                                <span>{{ item.percentage || 0 }}%</span>
                            </div>
                            <div class="skill-container-column__bar">
                                <div class="skill-container-column__inner" :style="{ width: item.percentage + '%'}"></div>
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
            skills: [
                {
                    name: 'Frontend',
                    items: [
                        {
                            name: 'Vue.js',
                            percentage: 80
                        },
                        {
                            name: 'HTML/CSS',
                            percentage: 80
                        },
                        {
                            name: 'Tailwind CSS',
                            percentage: 50
                        }
                    ]
                },
                {
                    name: 'Backend',
                    items: [
                        {
                            name: 'Node.js',
                            percentage: 30
                        },
                        {
                            name: 'Express',
                            percentage: 30
                        },
                        {
                            name: 'Pug',
                            percentage: 30
                        },
                    ]
                },
                {
                    name: 'Databases',
                    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite']
                },
                {
                    name: 'Tools',
                    items: ['Docker', 'Kubernetes', 'AWS', 'Azure']
                }
            ]
        }
    }
}
</script>