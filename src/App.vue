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
  background-color: #212529!important;
}
</style>
