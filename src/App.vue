<template>
  <div id="app">
    <!-- Don't need this branding here; should be replaced with the header from the website -->
    <!-- <img src="./assets/logo.png"> -->
    <header class="header">
      Website navbar here
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

.header {
  position: fixed;
  height: 50px;
  width: 100%;
}

router-view {
  position: relative;
  margin-top: 80px;
}
</style>
