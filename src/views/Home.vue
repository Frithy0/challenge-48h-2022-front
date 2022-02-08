<script setup>
import StarwarsService from "../services/module/starwars"
import apiClient from "../services/http-comon";
import {onMounted,inject,onUpdated} from 'vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const { state, setStateProp, getStateProp } = inject("state");
const inputText = ref("");
const route = useRoute();
const routeName = route.params.name;
let lastRoute = routeName 
let allElements = ref([])

async function getAllElems(item) {
    let i = 1;
    let currentPage
    do {
      currentPage = await apiClient.get('/' + item + '/?page=' + i);
      for (const elem of currentPage.data.results) {
        allElements.value.push(elem)
      }
      i++;
    } while (currentPage.data.next);
  return true
}

onMounted(() => {
  console.log
  getAllElems(lastRoute)
})

onUpdated(() => {
  const route = useRoute();
  const routeName = route.params.name;
  if (routeName != lastRoute){
    lastRoute = routeName
    allElements.value = []
    getAllElems(routeName)
  }
  
})
</script>

<template>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  
  <div id="logo"></div>

  <input class="search_bar" v-model="inputText" type="text">

  <container class="cont">
    <div class="flip-card" v-if="allElements.length" v-for="item in allElements">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3 class="list-group-item"> {{ item.name || item.title}} </h3>
        </div>
        <div class="flip-card-back">
          <h3>Infos</h3>
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
        </div>
      </div>
    </div>
  </container>
</template>

<style>

.search_bar{
  margin-left: 40%;
  width: 20%;
}

#logo{
  background: url('src/assets/Star_Wars_Logo.png');
}

.cont{
  display:flex;
  width: 80%;
  height: auto;
  justify-content:space-around;
  flex-wrap: wrap;
  margin-left: 10%;
  text-align: center;
  border-radius: 10px;
}

.flip-card{
  flex: 0 0 20%;
  margin: 5%;
  background-color: transparent;
  width: 300px;
  height: 200px;
  width: auto;
  perspective: 1000px;
}

.list-group-item{
  background-color: black;
  color: #00FFEF;
  border-radius: 15%;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 7%;
  border: solid 0.3em;
  border-color: yellow;
  border-radius: 10%;
}

.flip-card-front {
  background-color: black;
  color: #00FFEF;
}

.flip-card-front h3{
  color: white;
  top: 25%;
}

.flip-card-back {
  background-color: black;
  color: #00FFEF;
  transform: rotateY(180deg);
  height: auto;
  border-radius: 7%;
}

.flip-card-back .list-group-item {
  background-color: black;
  color: #00FFEF;
  height: auto;
  border-radius: 7%;
}

.flip-card-front .list-group-item {
  color: white;
  background-color: black;
}



</style>