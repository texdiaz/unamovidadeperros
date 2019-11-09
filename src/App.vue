<template>
  <div id="app">
   <div>
   <router-link to="/home">HOME</router-link>
   <router-link to="/razas">RAZAS</router-link>
   <router-link to="/contacto">CONTACTO</router-link>
   </div>
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
