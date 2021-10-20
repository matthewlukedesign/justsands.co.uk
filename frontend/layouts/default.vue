<template>
  <main class="relative flex flex-col min-h-full p-3 overflow-hidden">
    <transition name="fade">
      <MediaVideo
        :id="background"
        class="absolute top-0 object-cover w-full h-full"
        v-if="$nuxt.$route.path == '/' && background"
      ></MediaVideo>
      {{ background }}
    </transition>
    <transition name="fade">
      <NuxtLink
        v-if="$nuxt.$route.path != '/'"
        to="/"
        class="absolute top-0 right-0 w-12 h-12 m-3"
      >
        <SvgCross></SvgCross
      ></NuxtLink>
    </transition>
    <Nuxt /><LayoutFooter></LayoutFooter>
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['background']),
  },
}
</script>
