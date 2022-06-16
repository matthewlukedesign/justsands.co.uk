<template>
  <div class="relative flex flex-col flex-1 w-full h-full md:pb-3">
    <div class="relative z-10 flex flex-col flex-1">
      <div
        class="flex flex-col items-center justify-center flex-1 space-y-4 text-center  md:max-w-sm md:my-auto md:py-3 md:mx-auto order-0"
      >
        <Access />
      </div>
      <section class="order-2 mt-auto text-6xl uppercase md:order-none">
        <SvgSands></SvgSands>
      </section>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const informationQuery = groq`*[_type == "information"] {ticketLink, social, date, location, "background" : background.asset->playbackId} | order(_updatedAt desc)[0]`
    const information = await $sanity.fetch(informationQuery)
    const artistQuery = groq`*[_type == "artist"] {title, "tags" : tags[].label, _id} | order(order asc)`
    const artists = await $sanity.fetch(artistQuery)
    return { information, artists }
  },
  layout: 'expired',
}
</script>
<style lang="scss" scoped>
@screen md {
  .columns {
    columns: 2;
  }
}
</style>
