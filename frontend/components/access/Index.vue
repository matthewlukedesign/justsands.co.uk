<template>
  <client-only>
    <mailchimp
      url="https://justsands.us9.list-manage.com/subscribe/post-json"
      user-id="29a5a20b0b0f4c98158a9b760"
      list-id="d5f7ff1661"
    >
      <template v-slot="{ subscribe, setEmail, error, success }">
        <form @submit.prevent="subscribe" class="flex flex-col w-full">
          <header class="mb-3" v-if="!error && !success">
            Sign up here for the latest news on SANDS 2023
          </header>
          <span v-if="error" class="py-3">
            This email address is already subscribed.
          </span>
          <span v-else-if="success" class="py-3">
            Thank you for signing up.
          </span>
          <div v-if="!success" class="w-full">
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
              v-if="!success"
            />
          </div>
          <span class="text-2xs" v-if="!error && !success"
            >By signing up you agree to be contacted by related events from
            Soundcrash and Eat Your Own Ears
          </span>
        </form>
      </template>
    </mailchimp>
  </client-only>
</template>
