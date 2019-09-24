<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <MyAsyncComponent msg="ssdsds" />
    <div>
      {{ fullName }}
    </div>
    <ul>
      <li>
        <GlobalComponent name="55555" />
      </li>
      <li>
        <GlobalComponent name="55555" />
      </li>
    </ul>
    <HelloWorld msg="sjh"></HelloWorld>
    <navigation-link url="/profile">
      <!-- 添加一个 Font Awesome 图标 -->
      <span class="fa fa-user"></span>
      Your Profile
    </navigation-link>
    <button @click="show = true">Load Tooltip</button>
    <div v-if="show">
      <MyAsyncComponent />
    </div>

    {{ this.$store.state.count }}
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import NavigationLink from "./components/NavigationLink.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "app",
  metaInfo:{
    title: "sjh App"
  },
  components: {
    HelloWorld,
    NavigationLink,
    MyAsyncComponent: () => import("./components/my-async-component")
  },
  data() {
    return {
      msg: "hello",
      url: "",
      show: false
    };
  },
  beforeCreate() {
    console.log("beforeCreate Parent");
  },
  created() {
    console.log("created Parent");
  },
  beforeMount() {
    console.log("beforeMount Parent");
  },
  methods:{
    ...mapActions(['updateCountASync']),
    ...mapMutations(['updateCount'])
  },
  computed: {
    ...mapState(["count"]),
    // ...mapState({
    //   counter: 'count'
    // })
    // ...mapState({
    //   counter: (state)=> state.count
    // }),
    ...mapGetters(["fullName"])

    // fullName(){
    //   return this.$store.getters.fullName;
    // }
  },
  mounted() {
    this.msg = "sjh";
    // this.$store.dispatch('updateCountASync',{
    //   num: 5,
    //   time: 2000
    // })
    // this.updateCountASync({
    //   num: 5,
    //   time: 2000
    // })
    let i = 1;
    setInterval(() => {
       this.updateCount({
        num: i++,
        num2: 2
      });
    }, 1000);
   
    // let i = 1;
    // setInterval(() => {
    //   this.$store.commit("updateCount", {
    //     num: i++,
    //     num2: 2
    //   });
    // }, 1000);
  },
  updated() {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
