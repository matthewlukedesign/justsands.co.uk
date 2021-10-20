<template>
  <main class="min-h-full p-3 flex flex-col">
    <transition name="fade">
      <NuxtLink
        v-if="$nuxt.$route.path != '/'"
        to="/"
        class="absolute w-12 h-12 right-0 top-0 m-3"
      >
        <SvgCross></SvgCross
      ></NuxtLink>
    </transition>
    <Nuxt /><LayoutFooter></LayoutFooter>
  </main>
</template>
