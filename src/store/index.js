import { reactive } from "vue";

const store = reactive({
  categories: { 
  "people": "https://swapi.dev/api/people/",
  "planets": "https://swapi.dev/api/planets/",
  "films": "https://swapi.dev/api/films/",
  "species": "https://swapi.dev/api/species/",
  "vehicles": "https://swapi.dev/api/vehicles/",
  "starships": "https://swapi.dev/api/starships/",
  }
  
});

const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};

const getStateProp = (propName) => {
  return JSON.parse(JSON.stringify(store[propName]));
};
export default { state: store, setStateProp, getStateProp };