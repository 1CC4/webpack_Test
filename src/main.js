import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);

new Vue({
    el: '#app',
    router,
    render: createElements => createElements(App),
}) 