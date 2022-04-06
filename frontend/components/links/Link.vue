<template>
  <div>
    <a
      :href="link.link"
      target="_blank"
      class="flex items-center justify-between pt-1 uppercase cursor-pointer"
    >
      <span>{{ link.title }}</span>
      <span>→</span>
    </a>
  </div>
</template>
<script>
export default {
  props: ['link'],
}
</script>
