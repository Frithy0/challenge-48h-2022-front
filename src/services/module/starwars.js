import apiClient from "../http-comon";
import { inject } from 'vue'
//const { state, setStateProp, getStateProp } = inject("state");
export default {

  async getCategories() {
    return await apiClient.get('/');
  },

  async getAnswers(categ, response) {

    const page = await apiClient.get('/' + categ);
    const randomName = [response]
    while (randomName.length < 4) {
      const name = categ == "films" ? page.data.results[this.random(0, 9)].title : page.data.results[this.random(0, 9)].name;
      if (!randomName.includes(name)) {
        randomName.push(name)
      }
    }
    return randomName.sort(()=> Math.random() - 0.5);
  },

  random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

};