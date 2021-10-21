export const state = () => ({
  menu: [],
  background: false,
})
import { groq } from '@nuxtjs/sanity'

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_BACKGROUND(state, background) {
    state.background = background
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const menuQuery = groq`*[_type == "menu" ] {links[]->{title, "slug" : slug.current} } | order(_createdAt asc)[0]`
    const menu = await this.$sanity.fetch(menuQuery)
    commit('SET_MENU', menu)

    const backgroundQuery = groq`*[_type == "information" ] {"background" : {"video" : background.video.asset->playbackId, "image" : background.image.asset._ref}  } | order(_createdAt asc)[0]`
    const background = await this.$sanity.fetch(backgroundQuery)
    commit('SET_BACKGROUND', background.background)
  },
}
