import Vue from 'vue'
import App from './components/App'

import '@/scss/app.scss'

new Vue({
    el: '#app',
    render: h => h(App)
})