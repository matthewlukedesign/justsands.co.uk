<template>
  <div>
    <PortableText :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'

export default {
  components: {
    PortableText,
  },
  props: {
    blocks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        marks: {
          link: ExternalLink,
          internalLink: InternalLink,
        },
      },
    }
  },
}
</script>
<style scoped lang="scss">
p {
  @apply my-5;
  &:first-of-type {
    @apply mt-0;
  }
  &:last-of-type {
    @apply mb-0;
  }
  &:empty {
    @apply -mt-5;
  }
}

ul {
  li {
    @apply relative pl-5;
    &:before {
      @apply absolute left-0 top-0;
      content: '—';
    }
  }
}

@screen md {
  p {
    &:empty {
      @apply mt-0;
    }
  }
}
</style>
