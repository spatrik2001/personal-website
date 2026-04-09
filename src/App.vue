<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<script>
import NavbarComponent from './components/layout/NavbarComponent.vue'
import FooterComponent from './components/layout/FooterComponent.vue'

export default {
  components: {
    NavbarComponent, FooterComponent
  },
}
</script>
