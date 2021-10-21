<template>
  <div @click="toggle()">
    <header class="pt-1 uppercase cursor-pointer">
      {{ accordion.title }}
    </header>
    <div class="py-3" v-if="active">
      <Richtext :blocks="accordion.content"></Richtext>
    </div>
  </div>
</template>
<script>
export default {
  props: ['accordion'],
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active
    },
  },
}
</script>
