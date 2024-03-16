import { onUnmounted } from 'vue'

export function useVisibilitychange(callBack: () => void) {
  document.addEventListener('visibilitychange', onVisibilitychange)
  function onVisibilitychange() {
    if (!document.hidden) {
      callBack && callBack()
    }
  }
  onUnmounted(() => {
    document.removeEventListener('visibilitychange', onVisibilitychange)
  })
}
