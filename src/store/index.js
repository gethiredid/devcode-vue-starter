import Vue from "vue";
import Vuex from "vuex";

// Uncomment baris kode di bawah untuk meng-import axios
// import axios from "axios";

Vue.use(Vuex);

// Uncomment baris kode di bawah untuk mendapatkan API URL yang akan digunakan untuk mengambil data kontak dari API
// const BASE_URL = "https://api.contact-manager.project.skyshi.io";

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    // Uncomment baris kode di bawah untuk membuat sebuah fungsi yang akan mengambil semua data kontak dari API
    // async getAllContactsData() {
    //   return await axios.get(`${BASE_URL}/contacts`).catch((error) => {
    //     return error;
    //   });
    // },
  },
  modules: {},
});
