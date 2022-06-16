<template>
  <mailchimp
    url="https://justsands.us9.list-manage.com/subscribe/post"
    user-id="29a5a20b0b0f4c98158a9b760"
    list-id="d5f7ff1661"
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
            class="w-full px-1 py-3 leading-none text-black placeholder-black outline-none "
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
        <span class="text-xs"
          >By signing up you agree to be contacted by relating events from
          Soundcrash and Eat Your Own Ears” (very small writing)
        </span>
      </form>
    </template>
  </mailchimp>
</template>
