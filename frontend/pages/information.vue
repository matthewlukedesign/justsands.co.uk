<template>
  <div class="pb-6 space-y-8 md:space-y-12 md:w-1/2">
    <header class="uppercase">Information</header>
    <Accordions :accordions="information.information"></Accordions>
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
    const informationQuery = groq`*[_type == "information"] {information} | order(_updatedAt desc)[0]`
    const information = await $sanity.fetch(informationQuery)

    return { information }
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
