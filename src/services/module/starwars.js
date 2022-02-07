import apiClient from "../http-comon";
export default {

  async getCategories() {
    return await apiClient.get('/');
  },

};