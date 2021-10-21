<template>
  <main class="relative flex flex-col min-h-full p-2 overflow-hidden md:p-3">
    <transition name="fade">
      <MediaVideo
        :id="background"
        class="absolute top-0 left-0 object-cover w-full h-screen"
        v-if="$nuxt.$route.path == '/' && background.video"
      ></MediaVideo>
      <MediaImage
        :src="background.image"
        v-else-if="$nuxt.$route.path == '/' && background.image"
        class="absolute top-0 left-0 object-cover w-full h-screen"
        :sizes="'sm:100vw md:100vw lg:150vw'"
      ></MediaImage>
    </transition>

    <transition name="fade">
      <NuxtLink
        v-if="$nuxt.$route.path != '/'"
        to="/"
        class="absolute top-0 right-0 w-4 h-4 m-3 md:w-5 md:h-5"
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
