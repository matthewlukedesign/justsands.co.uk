<template>
  <div class="w-1/2 space-y-12 pb-6">
    <header class="uppercase">Information</header>
    <div
      class="
        space-y-1
        pb-1
        border-t border-b border-black
        divide-y divide-black
      "
    >
      <div
        v-for="information in information.information"
        :key="information._key"
        @click="toggle(information._key)"
      >
        <header class="pt-1 uppercase cursor-pointer">
          {{ information.title }}
        </header>
        <div class="py-3" v-if="active == information._key">
          <Richtext :blocks="information.content"></Richtext>
        </div>
      </div>
    </div>
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
