<script setup>
import StarwarsService from "../services/module/starwars";
import apiClient from "../services/http-comon";
import { onMounted, inject, onUpdated } from "vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
const { state, setStateProp, getStateProp } = inject("state");
const inputText = ref("");
const route = useRoute();
const routeName = route.params.name;
let lastRoute = routeName;
let allElements = ref([]);

async function getAllElems(item) {
  let i = 1;
  let currentPage;
  do {
    currentPage = await apiClient.get("/" + item + "/?page=" + i);
    for (const elem of currentPage.data.results) {
      elem.display = false;
      allElements.value.push(elem);
    }
    i++;
  } while (currentPage.data.next);
  return true;
}

onMounted(() => {
  console.log;
  getAllElems(lastRoute);
});

onUpdated(() => {
  const route = useRoute();
  const routeName = route.params.name;
  if (routeName != lastRoute) {
    lastRoute = routeName;
    allElements.value = [];
    getAllElems(routeName);
  }
  console.log(allElements.value);
});
</script>

<template>
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
    crossorigin="anonymous"
  />

  <div id="logo"></div>

  <div class="container">
    <div>
      <input
        style="
          margin-right: auto;
          margin-left: auto;
          width: 400px;
          margin-bottom: 20px;
        "
        class="form-control"
        v-model="inputText"
        type="text"
      />
    </div>

    <div class="row">
      <div
        class="col-xs-12 col-sm-6 col-md-4 mt-1 mb-1"
        v-for="item in allElements"
        v-show="
          (item.name &&
            item.name.toUpperCase().includes(inputText.toUpperCase())) ||
          (item.title &&
            item.title.toUpperCase().includes(inputText.toUpperCase()))
        "
      >
        <div class="card bg-dark mb-3 text-center">
          <div class="card-body text-warning">
            <h5 class="card-title">{{ item.name || item.title }}</h5>
            <p class="card-text" v-if="item.display">

          
            <div v-for="(value, key) of item">
              <div v-if="key!='name' && key!='homeworld' && key!='films'&& key!='vehicles'&& key!='starships' && key!='url'&& key!= 'display' && key!='species' && key!='created' && key!='edited' && key!='residents' && key!='people' && key!='pilots'">
                <p>{{ (key.charAt(0).toUpperCase() + key.slice(1)).replace('_', ' ') + " : " + value   }}</p>
              </div>
            </div>
              <!-- <li v-if="$route.params.name == 'people'">{{ "Height : " + item.height + " cm" }}</li>
              <li v-if="$route.params.name == 'people'">{{ "Gender : " + item.gender }}</li>
              <li v-if="$route.params.name == 'people'">{{ "Eye color : " + item.eye_color }}</li>

              <li v-if="$route.params.name == 'planets'">{{ "Climate : " + item.climate }}</li>
              <li v-if="$route.params.name == 'planets'">{{ "Diameter : " + item.diameter }}</li>
              <li
                v-if="$route.params.name == 'planets'"
              >{{ "Population : " + item.population + " hab" }}</li>
              <li v-if="$route.params.name == 'planets'">{{ "Terrain : " + item.terrain }}</li>

              <li v-if="$route.params.name == 'films'">{{ "Director : " + item.director }}</li>
              <li v-if="$route.params.name == 'films'">{{ "Producer : " + item.producer }}</li>
              <li v-if="$route.params.name == 'films'">{{ "Release date : " + item.release_date }}</li>
              <li v-if="$route.params.name == 'films'">{{ "Episode number : " + item.episode_id }}</li>

              <li v-if="$route.params.name == 'species'">{{ "Language : " + item.language }}</li>
              <li
                v-if="$route.params.name == 'species'"
              >{{ "Categorie species : " + item.classification }}</li>
              <li
                v-if="$route.params.name == 'species'"
              >{{ "Height : " + item.average_height + " cm" }}</li>
              <li
                v-if="$route.params.name == 'species'"
              >{{ "Lifespan : " + item.average_lifespan + " years" }}</li>

              <li
                v-if="$route.params.name == 'vehicles'"
              >{{ "Capacity : " + item.cargo_capacity + " peoples" }}</li>
              <li v-if="$route.params.name == 'vehicles'">{{ "Pirce : " + item.cost_in_credits }}</li>
              <li v-if="$route.params.name == 'vehicles'">{{ "Length : " + item.length + " m" }}</li>
              <li v-if="$route.params.name == 'vehicles'">{{ "Model : " + item.model }}</li>

              <li
                v-if="$route.params.name == 'starships'"
              >{{ "Cargo capacity : " + item.cargo_capacity + " peoples" }}</li>
              <li v-if="$route.params.name == 'starships'">{{ "Price : " + item.cost_in_credits }}</li>
              <li v-if="$route.params.name == 'starships'">{{ "Length : " + item.length + " m" }}</li>
              <li
                v-if="$route.params.name == 'starships'"
              >{{ "Number of passengers : " + item.passengers + " peoples" }}</li>
              <li
                v-if="$route.params.name == 'starships'"
              >{{ "Manufacturer : " + item.manufacturer }}</li> -->
            </p>
          </div>
          <div class="card-footer bg-transparent border-dark">
            <button
              v-if="!item.display"
              @click="item.display = true"
              class="btn btn-outline-warning"
            >See More</button>
            <button v-else @click="item.display = false" class="btn btn-outline-warning">See Less</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
[v-cloak]{display: none;}
.search_bar {
  margin-left: 40%;
  width: 20%;
}

#logo {
  background: url("src/assets/Star_Wars_Logo.png");
}

.cont {
  display: flex;
  width: 80%;
  height: auto;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 10%;
  text-align: center;
  border-radius: 10px;
}

.flip-card {
  flex: 0 0 20%;
  margin: 5%;
  background-color: transparent;
  width: 300px;
  height: 200px;
  width: auto;
  perspective: 1000px;
}

/*
.list-group-item{
  background-color: black;
  color: #00FFEF;
  border-radius: 15%;
}
*/
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

.flip-card-front,
.flip-card-back {
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
  color: #00ffef;
}

.flip-card-front h3 {
  color: white;
  top: 25%;
}

.flip-card-back {
  background-color: black;
  color: #00ffef;
  transform: rotateY(180deg);
  height: auto;
  border-radius: 7%;
}

.flip-card-back .list-group-item {
  background-color: black;
  color: #00ffef;
  height: auto;
  border-radius: 7%;
}

.flip-card-front .list-group-item {
  color: white;
  background-color: black;
}
</style>
