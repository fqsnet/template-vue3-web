import { defineStore } from 'pinia'
import { userType } from './types'
import { setToken, removeToken } from '@/utils'

export const useUserStore = defineStore({
  id: 'user',
  state: (): userType => ({
    userInfo: {
      token: '',
      userId: '',
      userName: ''
    }
  }),
  getters: {},
  actions: {
    setUserInfo(userInfo: { token?: string; userId?: string; userName?: string }) {
      this.userInfo = { ...this.userInfo, ...userInfo }
      setToken(userInfo.token)
    },
    clearUserInfo() {
      this.userInfo = {
        token: '',
        userId: '',
        userName: ''
      }
      removeToken()
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        paths: ['userInfo'],
        storage: window.localStorage
      }
    ]
  }
})
