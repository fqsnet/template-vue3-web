import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directive from '@/directive'
import '@/styles/index.scss'
// svg icons
import 'virtual:svg-icons-register'

const app = createApp(App)
app.use(store).use(router).use(directive)

app.mount('#app')
