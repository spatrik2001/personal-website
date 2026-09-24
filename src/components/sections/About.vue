<template>
    <div id="about" class="section about-section container">
        <div class="section-head">
            <h3 class="section-head-title">&lt; About Me /&gt;</h3>
            <hr />
        </div>
        <div class="section-body">
            <div class="about-container">
                <div class="about-container-column max-w-95 md:max-w-[500px]">
                    <div class="module-head">
                        <div class="module-head-buttons">
                            <div class="module-head-button bg-[#ff605c]"></div>
                            <div class="module-head-button bg-[#ffbd44]"></div>
                            <div class="module-head-button bg-[#00ca4e]"></div>
                        </div>
                        <h3 class="module-head-title">Developer.js</h3>
                    </div>
                    <div class="module-body" v-for="(line, index) in lines" :key="index">
                        <code class="about-container-card__code">
                            <div class="flex gap-4">
                                <p class="text-gray-400">{{ index + 1 }}</p>
                                <p class="whitespace-pre-wrap" v-html="line"></p>
                            </div>
                        </code>
                    </div>
                </div>
                <div class="about-container-column max-w-95 md:max-w-[500px]">
                    <div class="module-head mb-2">
                        <img
                          src="https://szelearning.sze.hu/pluginfile.php/429195/user/icon/boost/f1?rev=18701322"
                          alt="About me" class="about-container__thumbnail"/>
                    </div>
                    <div class="module-body text-center">
                        <p class="about-container__description">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque nam libero
                          totam ipsa ad sit rerum maxime ipsam autem aliquid, at iure alias ab laudantium
                          eveniet. Deleniti, laborum culpa?
                        </p>
                        <a class="about-container__button" href="#">Download CV</a>
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
            lines: [
                '<span class="text-red-400">const </span><span class="text-orange-300">Developer</span> = <span class="text-purple-400">require</span>("./models/developer");',
                '<span class="text-red-400">const</span> spatrik2001 = <span class="text-red-400">new</span> <span class="text-orange-300">Developer</span> ({',
                '  name: "Patrik Scheuer",',
                '  stack: "MEVN",',
                '  goal: "Learning new frameworks"',
                '});',
                '',
                'module.exports = spatrik2001;'
            ]
        }
    }
}
</script>