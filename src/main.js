import Vue from 'vue'
import App from './App.vue'
import PreCode from '@/components/PreCode.vue'

const slideComponents = require.context(
  './components/slides',
  false,
  /Slide[A-Z]\w+\.(vue|js)$/
);

slideComponents.keys().forEach(fileName => {
  const componentConfig = slideComponents(fileName);

  Vue.component(
    fileName.replace(/^\.\/(.*)\.\w+$/, '$1'),
    componentConfig.default || componentConfig
  )
});

Vue.component('pre-code', PreCode);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');