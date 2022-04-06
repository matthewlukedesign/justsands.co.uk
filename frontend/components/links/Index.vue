<template>
  <div
    class="pb-1 space-y-1 border-t border-b border-current divide-y divide-current "
  >
    <LinksLink v-for="link in links" :key="link._key" :link="link"></LinksLink>
  </div>
</template>
<script>
export default {
  props: ['links'],
}
</script>
