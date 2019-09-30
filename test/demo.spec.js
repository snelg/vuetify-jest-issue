import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import demo from '~/demo.vue'

Vue.use(Vuetify)

describe('demo', () => {
  test('shallow', () => {
    const shallow = shallowMount(demo, {
      localVue: createLocalVue(),
      vuetify: new Vuetify({})
    })

    expect(shallow.isVueInstance()).toBeTruthy()
  })

  test('mount', () => {
    const full = mount(demo, {
      localVue: createLocalVue(),
      vuetify: new Vuetify({})
    })

    expect(full.isVueInstance()).toBeTruthy()
  })
})
