<template>
  <div>
    <a v-bind:href="url" class="nav-link">
      <slot></slot>
    </a>
    <GlobalComponent name="66666" />
  </div>
</template>

<script>
export default {
  name: "Navigation Link",
  props: {
    href: String
  },
  data() {
    return {
      url: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
