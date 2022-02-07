<script setup>
import StarwarsService from "../services/module/starwars"
import {onMounted,inject} from 'vue'
import { useRoute } from 'vue-router'
const { state, setStateProp, getStateProp } = inject("state");

onMounted(async () => {
   
   const route = useRoute();
   const item = route.params.name;
   const allElems = await StarwarsService.getAllElems(item)
   setStateProp(item, allElems)
   console.log(allElems)
   
})




</script>

<template>
Name: {{ this.$route.params.name }}
</template>

<style>

</style>
