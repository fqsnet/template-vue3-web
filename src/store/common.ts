import { defineStore } from 'pinia'
import { commonType } from './types'

export const useCommonStore = defineStore({
  id: 'common',
  state: (): commonType => ({}),
  getters: {},
  actions: {}
})
