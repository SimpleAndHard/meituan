import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


Vue.prototype.$axios=axios;

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.directive('document-click', {
   bind(el,binding,vnode){
   
    document.addEventListener('click',binding.value,false);
   },
  //  inserted(el){
  //    console.log('插入了');
  //  },
  //  update(el){
  //    console.log('更新了');
  //  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
