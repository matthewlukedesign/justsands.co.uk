<template>
  <nuxt-img
    :src="src"
    provider="sanity"
    :modifiers="{ auto: 'format', crop: crop, hotspot: hotspot }"
    class="imagelazy lazyload"
    :style="`aspect-ratio: ${aspect}`"
    loading="lazy"
    :sizes="sizes ? sizes : 'sm:100vw md:100vw lg:2000px'"
  />
</template>
<script>
export default {
  props: ['src', 'crop', 'hotspot', 'aspect', 'sizes'],
}
</script>
