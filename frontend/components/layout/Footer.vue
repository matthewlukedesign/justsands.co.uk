<template>
  <header class="mt-auto leading-none flex justify-between">
    <NuxtLink to="/">&copy; SANDS {{ new Date().getFullYear() }}</NuxtLink>
    <NuxtLink :to="link[0].slug" v-for="(link, index) in menu" :key="index">{{
      link[0].title
    }}</NuxtLink>
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
