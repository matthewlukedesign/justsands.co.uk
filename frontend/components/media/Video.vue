<template>
  <video
    ref="video"
    loop
    playsinline
    autoplay
    muted="true"
    :src="`https://stream.mux.com/${this.id}.m3u8`"
    class="transition-opacity duration-300"
    :class="loaded ? '' : 'opacity-0'"
  ></video>
</template>
<script>
import Hls from 'hls.js'
export default {
  props: ['id', 'thumbnail', 'aspect'],
  data() {
    return {
      autoplay: true,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 0],
      },
      playing: false,
      muted: true,
      aspectRatio: '',
      loaded: false,
    }
  },
  mounted() {
    const playback = 'https://stream.mux.com/' + this.id + '.m3u8'
    let video = this.$refs['video']
    let that = this
    if (Hls.isSupported()) {
      let hls = new Hls()
      hls.loadSource(playback)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        that.loaded = true
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = playback
      that.loaded = true
    }
  },
}
</script>
