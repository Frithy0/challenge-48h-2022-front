<script setup>
import StarwarsService from "../services/module/starwars"
import {onMounted,inject} from 'vue'
import { useRoute } from 'vue-router'
const { state, setStateProp, getStateProp } = inject("state");

onMounted(async () => {
  const categories = await StarwarsService.getCategories()
  setStateProp("categories", categories.data) 
})
</script>

<template>
<div class="container">

    <header class="navbar_cadre">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" name="cat_bar">
        <a :href="'/cat/' + key" v-for="(value, key) in getStateProp('categories')" class="nav-link px-2 link-secondary" name="cat">{{key.toUpperCase()}}</a>
      </ul>

      <div class="col-md-3 text-end">
        <router-link :to="'/quiz'"> <a href="#" class="btn btn-outline-primary me-2" name="quiz_button"> Quiz </a></router-link>
      </div>
    </header>
    </div>
</template>

<style>
body{
  background: url(src/assets/SWFond.jpg);
}
.navbar_cadre {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-style: none;
  border-bottom-style: solid;
  border-color: #ffc107;
  border-bottom-width: 3px;
  border-radius: 2px;
  padding: 1%;
  margin: 1%;
}

ul[name="cat_bar"]{
}

a[name="cat"] {
  font-weight: 500;
  border: none;
  border-left: solid;
  border-radius: 1px;
  border-color:#ffc107;
  transition: ease-in 300ms;

}
a[name="cat"]:hover {
  border: none;
  border-left: solid;
  border-radius: 1px;
  border-color:#ffc107;
  background-color:#ffc107;
  color: white;
}

a[name="quiz_button"] {
}
</style>