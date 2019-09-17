import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import Meta from 'vue-meta';

import GlobalComponent from './components/GlobalComponent'
// import GlobalComponent2 from './components/GlobalComponent2'

import createStore from './store/store'
Vue.config.productionTip = false



Vue.use(Vuex)
Vue.use(Meta)

const store = createStore();

// let extendObj = {
//   updated: function () {
//     console.log("我是扩展的updated")
//   },
//   methods: {
//     add() {
//       console.log("我是扩展出来的ADD方法")
//     }
//   },
// }

// let childComp = {
//   template: '<div>{{msg}}</div>', // 子组件
//   created() {
//     console.log('child created')
//   },
//   mounted() {
//     console.log('child mounted')
//   },
//   data() {
//     return {
//       msg: 'Hello Child'
//     }
//   },
//   extend: extendObj
// }



// Vue.mixin({
//   created() {
//     console.log('parents  created');
//   } //  父组件添加方法
// })

// const requireComponent = require.context(
//   // Look for files in the current directory
//   './components',
//   // Do not look in subdirectories
//   false,
//   // Only include "_base-" prefixed .vue files
//   /.vue$/
//   )
  
//   console.log('requireComponent: ', requireComponent);
// // For each matching file name...
// requireComponent.keys().forEach((fileName) => {
//   // Get the component config
//   const componentConfig = requireComponent(fileName)
//   console.log('111: ', componentConfig); //模块详情
//   const componentName = fileName.split('/')[1]
//   console.log('componentConfig: ', componentConfig);
//   // Get the PascalCase version of the component name

//   // Globally register the component
//   Vue.component(componentName, componentConfig.default || componentConfig)
// })



// Vue.use(GlobalComponent); // 自定义全局组件的时候需要Vue.use();
Vue.component('GlobalComponent', GlobalComponent)  

// let LoadingComponent = {
//   template:'<div> loading</div>'
// }

// let ErrorComponent = {
//   template:'<div> error</div>'
// }

// const MyAsyncComponent = () => ({
//   // 需要加载的组件 (应该是一个 `Promise` 对象)
//   component: import('./components/my-async-component'),
//   // 异步组件加载时使用的组件
//   loading: LoadingComponent,
//   // 加载失败时使用的组件
//   error: ErrorComponent,
//   // 展示加载时组件的延时时间。默认值是 200 (毫秒)
//   delay: 200,
//   // 如果提供了超时时间且组件加载也超时了，
//   // 则使用加载失败时使用的组件。默认值是：`Infinity`
//   timeout: 500
// })

// Vue.component('MyAsyncComponent', MyAsyncComponent)

// Vue.component('MyAsyncComponent',(resolve, reject)=>{
//   // setTimeout(()=>{
//   //   resolve(GlobalComponent)
//   // }, 2000)


//   // 这个特殊的 `require` 语法将会告诉 webpack
//   // 自动将你的构建代码切割成多个包，这些包
//   // 会通过 Ajax 请求加载
//   require(['./components/my-async-component'], resolve)

//   if(reject){
//     // reject
//   }
  
// })

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el:'#app',
//   render(createElement){
//     return createElement('div',{
//       attrs: {
//         id: '#app'
//       }
//     }, this.message)
//   },
//   data(){
//     return{
//       message: 'Hello Vue'
//     }
//   }
// })