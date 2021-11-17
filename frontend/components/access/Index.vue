<template>
  <mailchimp
    url="https://wgap.us11.list-manage.com/subscribe/post-json"
    user-id="c32c1c8b1993e44f9455c124d"
    list-id="adfcc78358"
  >
    <template v-slot="{ subscribe, setEmail, error, success }">
      <form @submit.prevent="subscribe" class="flex flex-col w-full">
        <span v-if="error" class="py-3">
          This email address is already subscribed.
        </span>
        <span v-else-if="success" class="py-3">
          Thank you for requesting priority access.
        </span>
        <div v-else class="w-full">
          <input
            type="email"
            class="w-full py-3 leading-none placeholder-black outline-none"
            placeholder="Enter email address"
            @input="setEmail($event.target.value)"
            required
            ref="input"
          />
        </div>
        <div class="py-3 border-t border-black">
          <input
            type="submit"
            class="flex-1 cursor-pointer btn"
            value="Submit"
            v-if="!error && !success"
          />
        </div>
      </form>
    </template>
  </mailchimp>
</template>
