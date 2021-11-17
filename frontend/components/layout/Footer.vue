<template>
  <header
    class="relative z-10 justify-between hidden mt-auto text-xs leading-none  md:flex"
  >
    <NuxtLink to="/">&copy; SANDS {{ new Date().getFullYear() }}</NuxtLink>
    <span v-for="(link, index) in menu.links" :key="index">
      <NuxtLink :to="link.slug" v-if="link.slug">{{ link.title }}</NuxtLink>
      <a target="_blank" :href="link.external.link" v-else-if="link.external">{{
        link.external.title
      }}</a>
    </span>
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
