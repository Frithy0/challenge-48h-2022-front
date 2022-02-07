import apiClient from "../http-comon";
export default {

  async getCategories() {
    return await apiClient.get('/');
  },

  async getAllElems(item = 'people') {
    let i = 1;
    let allElements = []
    let currentPage

    do {
      currentPage = await apiClient.get('/' + item + '/?page=' + i);
      for (const elem of currentPage.data.results) {
        allElements.push(elem)
      }
      i++;
    } while (currentPage.data.next);
  console.log(allElements)
    return allElements;
  },

};