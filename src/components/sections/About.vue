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
            <h3 class="module-head-title">Developer.js</h3>
            <div class="module-head-buttons">
              <div class="module-head-button bg-[#ff605c]"></div>
              <div class="module-head-button bg-[#ffbd44]"></div>
              <div class="module-head-button bg-[#00ca4e]"></div>
            </div>
          </div>
          <div class="module-body">
            <code class="about-container-card__code">
              <div class="flex gap-4">
                <p class="text-gray-400">1</p>
                <p>
                  <span class="text-red-400">const </span>
                  <span class="text-orange-300">Developer</span> =
                  <span class="text-purple-400">require</span>('./models/developer');
                </p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">2</p>
                <p>
                  <span class="text-red-400">const </span> spatrik2001 =
                  <span class="text-red-400">new </span>
                  <span class="text-orange-300">Developer</span> ({
                </p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">3</p>
                <p class="ml-6">name: "Patrik Scheuer",</p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">4</p>
                <p class="ml-6">stack: "MEVN",</p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">5</p>
                <p class="ml-6">goal: "Learning new frameworks"</p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">6</p>
                <p>});</p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">7</p>
              </div>
              <div class="flex gap-4">
                <p class="text-gray-400">8</p>
                <p>module.exports = spatrik2001;</p>
              </div>
            </code>
          </div>
        </div>
        <div class="about-container-column max-w-95 md:max-w-[500px]">
          <div class="module-head mb-2">
            <img
              src="https://szelearning.sze.hu/pluginfile.php/429195/user/icon/boost/f1?rev=18701322"
              alt="About me"
              class="about-container__thumbnail"
            />
          </div>
          <div class="module-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam neque nam libero
              totam ipsa ad sit rerum maxime ipsam autem aliquid, at iure alias ab laudantium
              eveniet. Deleniti, laborum culpa?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
