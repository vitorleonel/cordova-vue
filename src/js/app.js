import '@/js/bootstrap'
import '@/scss/app.scss'

import Vue from 'vue'
import App from './components/App'
import router from './router'

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})