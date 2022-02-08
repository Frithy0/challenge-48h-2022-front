<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
<Navbar/>
 <router-view />
</template>

<style>
#app {
  margin: 0;
}

body{
  background: url(src/assets/SWFond.jpg);
}
</style>
