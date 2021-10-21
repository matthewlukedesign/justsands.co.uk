<template>
  <div
    class="pb-1 space-y-1 border-t border-b border-black divide-y divide-black"
  >
    <AccordionsAccordion
      v-for="information in accordions"
      :key="information._key"
      :accordion="information"
    ></AccordionsAccordion>
  </div>
</template>
<script>
export default {
  props: ['accordions'],
}
</script>
