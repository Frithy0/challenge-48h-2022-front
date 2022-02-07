<script setup>
import StarwarsService from "../services/module/starwars"
import {onMounted,inject} from 'vue'
const { state, setStateProp, getStateProp } = inject("state");

onMounted(async () => {
   
   const allElems = await StarwarsService.getAllElems('planets')
   setStateProp("planets", allElems)
   console.log(allElems)

})


</script>

<template>
{{name2}}
</template>

<style>

</style>
