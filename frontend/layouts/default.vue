<template>
  <main class="relative flex flex-col min-h-full p-2 overflow-hidden md:p-3">
    <transition name="fade">
      <MediaVideo
        :id="background"
        class="absolute top-0 left-0 object-cover w-full h-full"
        v-if="$nuxt.$route.path == '/' && background.video"
      ></MediaVideo>
      <MediaImage
        :src="background.image"
        v-else-if="$nuxt.$route.path == '/' && background.image"
        class="absolute top-0 left-0 object-cover w-full h-full"
        :sizes="'sm:100vw md:100vw lg:150vw'"
      ></MediaImage>
    </transition>

    <transition name="fade">
      <NuxtLink
        v-if="$nuxt.$route.path != '/'"
        to="/"
        class="absolute top-0 right-0 w-8 h-8 m-3 md:w-10 md:h-10"
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
