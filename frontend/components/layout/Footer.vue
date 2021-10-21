<template>
  <header
    class="relative z-10 justify-between hidden mt-auto text-xs leading-none  md:flex"
  >
    <NuxtLink to="/">&copy; SANDS {{ new Date().getFullYear() }}</NuxtLink>
    <NuxtLink
      :to="link.slug"
      v-for="(link, index) in menu.links"
      :key="index"
      >{{ link.title }}</NuxtLink
    >
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['menu']),
  },
}
</script>
