<template>
  <div class="relative flex flex-col flex-1 w-full h-full md:pb-3">
    <div class="relative z-10 flex flex-col flex-1">
      <header
        class="order-1 py-3 space-y-6  md:order-none md:space-y-0 md:py-0 md:grid md:grid-cols-4 md:order-0"
      >
        <div class="col-span-2 md:grid md:grid-cols-2">
          <article v-for="artist in artists" :key="artist._id">
            {{ artist.title }}
            <span v-if="artist.tags">
              <span
                v-for="(tag, index) in artist.tags"
                :key="index"
                class="uppercase text-2xs"
              >
                {{ tag }}
              </span>
            </span>
          </article>
          <article>
            <span>+ Many more TBA</span>
          </article>
        </div>
        <div class="flex flex-col items-start space-y-6 md:space-y-0">
          <Richtext
            :blocks="information.location"
            class="ml-auto md:ml-0"
          ></Richtext>
          <footer class="mt-auto">
            {{ information.date.from | moment('ddd DD') }}
            <span class="mx-1 font-body">–</span>
            {{ information.date.from | moment('ddd DD') }}
            <div class="flex justify-between">
              <span>{{ information.date.from | moment('MMM') }}</span>
              <span>{{ information.date.from | moment('YYYY') }}</span>
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
        class="flex flex-col space-y-2  md:my-auto md:space-y-0 md:py-3 md:mx-auto md:flex-row md:w-2/3 order-0"
      >
        <div class="flex w-full md:justify-center">
          <NuxtLink to="/access" class="btn">Priority Access</NuxtLink>
        </div>
        <div class="flex w-full md:justify-center">
          <NuxtLink to="/information" class="btn">Information</NuxtLink>
        </div>
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
    const artistQuery = groq`*[_type == "artist"] {title, "tags" : tags[].label, _id} | order(_updatedAt desc)`
    const artists = await $sanity.fetch(artistQuery)
    return { information, artists }
  },
}
</script>
