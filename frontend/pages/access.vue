<template>
  <div class="pb-6 space-y-8 md:space-y-12 md:w-1/2">
    <header class="uppercase">Priority Access</header>
    <div action="" class="border-t border-black divide-y divide-black">
      <div>
        <input
          type="text"
          class="w-full py-3 placeholder-black outline-none"
          placeholder="Enter email address"
          v-if="!sent"
        />
        <div v-else class="py-3">Thank you for registering!</div>
      </div>
      <footer
        v-if="!sent"
        class="flex flex-col items-start pt-3 space-y-5 border-t border-black"
      >
        <button type="submit" class="btn" @click="submit">Submit</button>
        <p class="text-sm leading-snug">
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
