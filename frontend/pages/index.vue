<template>
  <div class="relative flex flex-col flex-1 w-full h-full md:pb-3">
    <div class="relative z-10 flex flex-col flex-1">
      <header
        class="order-1 py-3 space-y-6  md:order-none md:space-y-0 md:py-0 md:grid md:grid-cols-4 md:order-0"
      >
        <div class="col-span-2 columns">
          <article v-for="artist in artists" :key="artist._id">
            {{ artist.title }}
            <span v-if="artist.tags" class="font-medium">
              <span
                v-for="(tag, index) in artist.tags"
                :key="index"
                class="uppercase text-2xs"
              >
                {{ tag }}
              </span>
            </span>
          </article>
          <article></article>
        </div>
        <div class="flex flex-col items-start space-y-6 md:space-y-0">
          <Richtext
            :blocks="information.location"
            class="ml-auto md:ml-0"
          ></Richtext>
          <br />
          <footer class="mt-auto">
            {{ information.date.from | moment('ddd D')
            }}<span v-if="information.date.to != information.date.from"
              ><span class="mx-1 font-body">—</span
              >{{ information.date.to | moment('ddd D') }}</span
            >
            <div class="flex justify-between">
              <span>{{ information.date.from | moment('MMMM') }}</span
              >&nbsp;
              <span> {{ information.date.to | moment('YYYY') }}</span>
            </div>
          </footer>
        </div>
        <div class="flex-col hidden md:flex">
          <a
            :href="social.url"
            target="_blank"
            v-for="(social, index) in information.social"
            :key="index"
          >
            {{ social.title }}
          </a>
        </div>
      </header>
      <nav
        class="flex flex-col items-center space-y-2  md:space-x-2 md:my-auto md:space-y-0 md:py-3 md:mx-auto md:flex-row order-0"
      >
        <a
          href="https://soundcrashmusic.com/show/sands-priority-sign-up/"
          target="_blank"
          class="btn"
          >Early Access</a
        >
        <span class="pointer-events-none disabled btn"
          >General Onsale 3 December</span
        >

        <NuxtLink to="/information" class="btn">Information</NuxtLink>
      </nav>

      <section class="order-2 text-6xl uppercase md:order-none">
        <SvgSands></SvgSands>
      </section>
      <div class="flex flex-col order-last mt-3 space-y-2 md:hidden">
        <a
          :href="social.url"
          target="_blank"
          class="btn"
          v-for="(social, index) in information.social"
          :key="index"
        >
          {{ social.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const informationQuery = groq`*[_type == "information"] {social, date, location, "background" : background.asset->playbackId} | order(_updatedAt desc)[0]`
    const information = await $sanity.fetch(informationQuery)
    const artistQuery = groq`*[_type == "artist"] {title, "tags" : tags[].label, _id} | order(order asc)`
    const artists = await $sanity.fetch(artistQuery)
    return { information, artists }
  },
}
</script>
<style lang="scss" scoped>
@screen md {
  .columns {
    columns: 2;
  }
}
</style>
