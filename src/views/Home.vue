<script setup>
import StarwarsService from "../services/module/starwars"
import {onMounted,inject,onUpdated} from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const { state, setStateProp, getStateProp } = inject("state");
const inputText = ref("");
const allElems = ref([])


onMounted(async () => {
   
   const route = useRoute();
   const routeName = route.params.name;
   
   allElems.value = await StarwarsService.getAllElems(routeName)
   // console.log(data)
   // allElems.value = data
   setStateProp(routeName, allElems)
   console.log(allElems);
})

onUpdated(async () => {
  const route = useRoute();
   const routeName = route.params.name;

  allElems.value = await StarwarsService.getAllElems(routeName)
   setStateProp(routeName, allElems)
})

</script>

<template>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
  <!-- <input v-model="inputText" type="text"> -->

  <div id="example-1">
    <div v-if="allElems.length>0" v-for="item in allElems">
      <div class="card" style="width: 18rem;">
          <div class="card-header">
            INFOS
          </div>
            <ul class="list-group list-group-flush">

              <li  class="list-group-item"> {{ item.name || item.title}} </li>
              <li v-if ="$route.params.name =='people'" class="list-group-item"> {{ 'Height : ' + item.height+ " cm"}}</li>
              <li v-if ="$route.params.name =='people'" class="list-group-item"> {{ 'Gender : ' + item.gender}}</li>
              <li v-if ="$route.params.name =='people'" class="list-group-item"> {{ 'Eye color : ' + item.eye_color}}</li>
              <!-- <li v-if ="$route.params.name =='people'" class="list-group-item"> {{ 'Homeworld : ' + item.homeworld.name}}</li> -->

              <li v-if ="$route.params.name =='planets'" class="list-group-item"> {{ 'Climate : ' + item.climate}}</li>
              <li v-if ="$route.params.name =='planets'" class="list-group-item"> {{ 'Diameter : ' + item.diameter}}</li>
              <li v-if ="$route.params.name =='planets'" class="list-group-item"> {{ 'Population : ' + item.population + " hab"}}</li>
              <li v-if ="$route.params.name =='planets'" class="list-group-item"> {{ 'Terrain : ' + item.terrain}}</li>

              <li v-if ="$route.params.name =='films'" class="list-group-item"> {{ 'Director : ' + item.director}}</li>
              <li v-if ="$route.params.name =='films'" class="list-group-item"> {{ 'Producer : ' + item.producer}}</li>
              <li v-if ="$route.params.name =='films'" class="list-group-item"> {{ 'Release date : ' + item.release_date}}</li>
              <li v-if ="$route.params.name =='films'" class="list-group-item"> {{ 'Episode number : ' + item.episode_id}}</li>
              <!-- <li v-if ="$route.params.name =='films'" class="list-group-item"> {{ 'Created : ' + item.created}}</li> -->

              <li v-if ="$route.params.name =='species'" class="list-group-item"> {{ 'Language : ' + item.language}}</li>
              <li v-if ="$route.params.name =='species'" class="list-group-item"> {{ 'Categorie species : ' + item.classification}}</li>
              <li v-if ="$route.params.name =='species'" class="list-group-item"> {{ 'Height : ' + item.average_height + ' cm'}}</li>
              <li v-if ="$route.params.name =='species'" class="list-group-item"> {{ 'Lifespan : ' + item.average_lifespan + ' years'}}</li>
              
              <li v-if ="$route.params.name =='vehicles'" class="list-group-item"> {{ 'Capacity : ' + item.cargo_capacity + ' peoples'}}</li>
              <li v-if ="$route.params.name =='vehicles'" class="list-group-item"> {{ 'Pirce : ' + item.cost_in_credits}}</li>
              <li v-if ="$route.params.name =='vehicles'" class="list-group-item"> {{ 'Length : ' + item.length + ' m'}}</li>
              <li v-if ="$route.params.name =='vehicles'" class="list-group-item"> {{ 'Model : ' + item.model  }}</li>

              <li v-if ="$route.params.name =='starships'" class="list-group-item"> {{ 'Cargo capacity : ' + item.cargo_capacity + " peoples" }}</li>
              <li v-if ="$route.params.name =='starships'" class="list-group-item"> {{ 'Price : ' + item.cost_in_credits  }}</li>
              <li v-if ="$route.params.name =='starships'" class="list-group-item"> {{ 'Length : ' + item.length + " m"  }}</li>
              <li v-if ="$route.params.name =='starships'" class="list-group-item"> {{ 'Number of passengers : ' + item.passengers + " peoples" }}</li>
              <li v-if ="$route.params.name =='starships'" class="list-group-item"> {{ 'Manufacturer : ' + item.manufacturer  }}</li>
              
            </ul>
        </div>
    </div>
  </div>
</template>

<style>

</style>