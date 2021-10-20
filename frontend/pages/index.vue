<template>
  <div class="flex flex-col flex-1 pb-3">
    <header class="grid grid-cols-4">
      <div class="col-span-2 grid grid-cols-2">
        <article v-for="artist in artists" :key="artist._id">
          {{ artist.title }}
          <span v-if="artist.tags">
            <span
              v-for="(tag, index) in artist.tags"
              :key="index"
              class="text-2xs uppercase"
            >
              {{ tag }}
            </span>
          </span>
        </article>
        <article>
          <span>+ Many more TBA</span>
        </article>
      </div>
      <div class="flex flex-col items-start">
        <Richtext :blocks="information.location"></Richtext>
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
      <div class="flex flex-col">
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
    <nav class="my-auto flex w-2/3 py-3 mx-auto">
      <div class="w-full flex justify-center">
        <NuxtLink to="/access" class="btn">Priority Access</NuxtLink>
      </div>
      <div class="w-full flex justify-center">
        <NuxtLink to="/information" class="btn">Information</NuxtLink>
      </div>
    </nav>

    <section class="text-6xl uppercase"><SvgSands></SvgSands></section>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
export default {
  async asyncData({ params, $sanity }) {
    const informationQuery = groq`*[_type == "information"] {social, date, location} | order(_updatedAt desc)[0]`
    const information = await $sanity.fetch(informationQuery)
    const artistQuery = groq`*[_type == "artist"] {title, "tags" : tags[].label, _id} | order(_updatedAt desc)`
    const artists = await $sanity.fetch(artistQuery)
    return { information, artists }
  },
}
</script>
