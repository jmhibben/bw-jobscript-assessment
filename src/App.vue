<template>
  <div id="app">
    <!-- Don't need this branding here; should be replaced with the header from the website --> 
    <!-- <img src="./assets/logo.png"> --> 
    <div class="header fixed-header flush-top-left" role="navigation">
      <div class="">
        <a href="#">Website navbar here</a>
      </div>
    </div>
    <div id="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "./assets/less/helpers";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-y: auto;
}

#view {
  margin-top: 70px;
  .z(0)
}

.header {
  height: 40px; 
  border-bottom: 1px solid black;
  box-shadow: 0 0 3px black;
  padding: 10px;
  background-color: white;
  width: 100%;
  .z(5);
} 
</style>

