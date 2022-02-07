import { reactive } from "vue";

const store = reactive({
  categories: {},
});

const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};
export default { state: store, setStateProp };