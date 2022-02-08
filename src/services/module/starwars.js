import apiClient from "../http-comon";
import {inject} from 'vue'
//const { state, setStateProp, getStateProp } = inject("state");
export default {

  async getCategories() {
    return await apiClient.get('/');
  },

  async getAllElems(item = 'planets') {
    let i = 1;
    let allElements = []
    let currentPage

    do {
      currentPage = await apiClient.get('/' + item + '/?page=' + i);
      for (const elem of currentPage.data.results) {
        allElements.push(elem)
      }
      //setStateProp(item, allElements)
      i++;
    } while (currentPage.data.next);
    return allElements;
  },

};