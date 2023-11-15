import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/app.css'
import BackToTop from 'vue-backtotop'
import feather from 'feather-icons'

feather.replace()

createApp(App).use(router).use(BackToTop).mount('#app')

const appTheme = localStorage.getItem('theme')

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (appTheme === 'dark') {
  document.getElementById('mainBody').classList.add('bg-primary-dark')
} else {
  document.getElementById('mainBody').classList.add('bg-primary-light')
}
