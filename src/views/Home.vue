<script setup>
import StarwarsService from "../services/module/starwars"
import {onMounted,inject} from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const { state, setStateProp, getStateProp } = inject("state");
const inputText = ref("");
const allElems = ref([])


onMounted(async () => {
   
   const route = useRoute();
   const items = route.params.name;
   
   allElems.value = await StarwarsService.getAllElems(items)
   // console.log(data)
   // allElems.value = data
   setStateProp(items, allElems)
   console.log(allElems);
})

</script>

<template>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
  <input v-model="inputText" type="text">

  <div id="example-1">
    <h1>CARD</h1>
    <section v-if="allElems.length>0" v-for="item in allElems">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
            Name
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"> {{ item.name}} </li>
              <li class="list-group-item"> {{ item.height+ " cm"}}   </li>
            </ul>
        </div>
        <!-- <p v-if="item.includes(inputText)">
        
      </p> -->
    </section>
  </div>
</template>

<style>

</style>