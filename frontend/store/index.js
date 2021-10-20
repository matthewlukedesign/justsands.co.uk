export const state = () => ({
  menu: [],
})
import { groq } from '@nuxtjs/sanity'

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const menuQuery = groq`*[_type == "menu" ] {links[]->{title, "slug" : slug.current} } | order(_createdAt asc)[0]`
    const menu = await this.$sanity.fetch(menuQuery)
    commit('SET_MENU', menu)
  },
}
