<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import World from './components/World.vue'

export default defineComponent({
    name: 'App',
    components: {
        World: World,
    },
})
</script>

<style>
#app {
  background-color: cyan;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}
body {
  margin: 0;
}
</style>
