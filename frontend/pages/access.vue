<template>
  <div class="w-1/2 space-y-12 pb-6">
    <header class="uppercase">Priority Access</header>
    <div action="" class="border-t border-black divide-y divide-black">
      <div>
        <input
          type="text"
          class="placeholder-black w-full py-3 outline-none"
          placeholder="Enter email address"
          v-if="!sent"
        />
        <div v-else class="py-3">Thank you for registering!</div>
      </div>
      <footer
        v-if="!sent"
        class="border-t flex flex-col border-black pt-3 items-start space-y-5"
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
