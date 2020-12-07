<template>
  <ul>
    <router-link tag="li" to="/movie">电影</router-link>
    <router-link tag="li" to="/cinema">电影院</router-link>
    <router-link tag="li" to="/mine">我的</router-link>
  </ul>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
ul {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid darkgrey;
}
ul li {
  height: 40px;
  line-height: 40px;
  flex: 1;
  text-align: center;
}
.router-link-active {
  background: pink;
}
</style>
