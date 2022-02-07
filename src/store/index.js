import { reactive } from "vue";

const store = reactive({
  categories: {}
});

const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};

const getStateProp = (propName) => {
  return JSON.parse(JSON.stringify(store[propName]));
};
export default { state: store, setStateProp, getStateProp };