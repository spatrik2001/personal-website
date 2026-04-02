<template>
  <NavbarComponent />
  <main class="main-content">
    <RouterView />
  </main>
</template>

<script>
import NavbarComponent from './components/layout/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent,
  },
}
</script>
