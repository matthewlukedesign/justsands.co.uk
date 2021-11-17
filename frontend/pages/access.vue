<template>
  <div class="pb-6 space-y-8 md:space-y-12 md:w-1/2">
    <header class="uppercase">Priority Access</header>
    <div class="border-t border-black">
      <Access></Access>
      <footer v-if="!sent" class="flex flex-col items-start pt-3 space-y-5">
        <p>
          By registering you are also opting in to receive updates about events
          organised by Soundcrash and Eat Your Own Ears
        </p>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sent: false,
    }
  },
  methods: {
    submit() {
      this.sent = true
    },
  },
}
</script>
