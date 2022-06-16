<template>
  <div class="relative flex flex-col min-h-full p-2 overflow-hidden md:p-3">
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
    <Nuxt />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['background']),
  },
}
</script>
