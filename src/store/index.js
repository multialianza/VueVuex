import { createStore } from "vuex"; /**Se importa la función createStore  desde la librería Vuex */
import juegosData from "../db/juegos.json"; /**Se importa un archivo JSON llamado juegos.json que contiene datos de juegos */
export default createStore({  /**Se exporta un objeto que contiene diferentes propiedades como state, getters, mutations, actionsy modules */
  state: {  /**Contiene una propiedad llamada juegos que inicializa con los datos del archivo juegos.json */
    juegos: juegosData,
  },
  getters: {},
  mutations: {  /**Contiene una mutación llamada SET_STOCK que permite modificar el stock de un juego en base a su código. Busca el juego correspondiente en el array juegos del estado y actualiza el stockcon el valor proporcionado. */
    SET_STOCK(state, { codigo, stock }) {
      const juego = state.juegos.find((juego) => juego.codigo === codigo);
      if (juego) {
        juego.stock = stock;
      }
    },
  },

  actions: {  /**Contiene dos acciones llamadas incrementarStock y disminuirStock, que reciben un juego como parámetro. Estas acciones incrementan o disminuyen en uno el stock del juego, respectivamente. Para ello , llaman a la mutación SET_STOCK pasando el código del juego y el nuevo stock */
    incrementarStock({ commit }, juego) {
      const nuevoStock = parseInt(juego.stock) + 1;
      commit('SET_STOCK', { codigo: juego.codigo, stock: nuevoStock });
    },
    disminuirStock({ commit }, juego) {
      const nuevoStock = parseInt(juego.stock) - 1;
      if (nuevoStock >= 0) {
        commit('SET_STOCK', { codigo: juego.codigo, stock: nuevoStock });
      }
    }
  },
  
  modules: {},  /**Se se ha definido ningún módulo en este caso */
});
/**En resumen, este código define un almacén Vuex con un estado inicial que contiene datos de juegos, mutaciones*/
/**para modificar el stock de los juegos y acciones para interactuar con las mutaciones. Estas acciones pueden */
/**ser llamadas desde componentes Vue para gestionar el stock de los juegos de manera reactiva */