<template>
  <div class="pb-6 space-y-8 md:space-y-12 md:w-1/2">
    <header class="uppercase">Accommodation</header>
    <Links :links="accommodation.links"></Links>
  </div>
</template>
<script>
import { groq } from '@nuxtjs/sanity'
export default {
  data() {
    return {
      active: false,
    }
  },
  async asyncData({ params, $sanity }) {
    const accommodationQuery = groq`*[_type == "accommodation"] {links} | order(_updatedAt desc)[0]`
    const accommodation = await $sanity.fetch(accommodationQuery)

    return { accommodation }
  },
  methods: {
    toggle(key) {
      if (this.active == key) {
        this.active = false
      } else {
        this.active = key
      }
    },
  },
}
</script>
