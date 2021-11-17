<template>
  <div class="w-1/2 pb-6 space-y-12" v-if="page">
    <header class="uppercase">{{ page.title }}</header>
    <div>
      <Richtext :blocks="page.content"></Richtext>
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
    const pageQuery = groq`*[_type == "page" && slug.current == "${params.slug}"] {title, content} | order(_updatedAt desc)[0]`
    const page = await $sanity.fetch(pageQuery)

    return { page }
  },
}
</script>
