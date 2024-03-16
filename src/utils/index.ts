export const px2vw = (px: number | string): string => `${(Number(px) / 750) * 100}vw`
import Cookies from 'js-cookie'
import { TOKEN_KEY } from '@/constant'

export function getToken() {
  return Cookies.get(TOKEN_KEY)
}

export function setToken(token: string) {
  return Cookies.set(TOKEN_KEY, token)
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY)
}
