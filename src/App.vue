<template>
  <div id="app">  <!--Se define un div con el id app que contiene un título h1 y un subtítulo h3-->
    <h1>Tienda 32 Bits</h1>
    <h3>Lista de Juegos</h3>
    <table> <!--Se muestra una tabla con una fila de encabezado thead y las filas de los juegos en el cuerpo de la tabla tbody-->
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody> <!--Dentro de la fila para cada juego se utiliza la directiva v-for para recorrer el array de juegos almacenado en el estado de Vuex  $store.state.juegos . Por cada juego se muestra el código, nombre,stock y precio en celdas de la tabla-->
        <tr v-for="juego in $store.state.juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>  <!--Dentro de las celdas acciones se muestran 2 botones con los eventos de @click que llaman a los métodos incrementarStock y disminuirStock, pasando como parámetro el juego al que se refiere la fila-->
            <button @click="incrementarStock(juego)">+</button>
            <button @click="disminuirStock(juego)">-</button>
          </td>
        </tr>
      </tbody>

    </table>
  </div>
</template> <!--En resumen, este código muestra una lista de juegos con su información y permite incrementar o disminuir el stock de cada uno mediante botones-->

<script>
import { mapState, mapActions } from 'vuex'; /**Se importan 2 funciones de Vuex: mapState y mapActions */
/**mapState nos permite mapear propiedades del estado de Vuex a las propiedades del estado de Vuex a las propiedades de la instancia de Vuex. */
/**mapActions nos permite mapear acciones de Vuex a métodos de la instancia de Vuex */
export default {
  name: 'App',  /**Creamos un componente Vue con el nombre de App */
  computed: {   /**En la sección computed estamos usando la función mapState para mapear las propiedades juegos del estado de Vuex a la propiedad de juegos de la instancia Vue. Esto nos permite acceder al estado juegos directamente en el componente sin tener que hacer referencia al store de Vuex. */
    ...mapState({
      juegos: state => state.juegos
    })
  },
  mounted() { /**En el método mounted estamos imprimiendo en la consola el valor de la propiedad juegos para verificar que se haya mapeado correctamente */
    console.log(this.juegos);
  },
  methods: {    /**En la sección methods estamos utilizando la función mapActions para mapear las acciones  incrementarStock y disminuirStock del store de Vuex a métodos del componente Vue. Esto nos permite llamar a estas acciones directamente en el componente sin tener que hacer referencia al store de Vuex  */
    ...mapActions(['incrementarStock', 'disminuirStock'])
  }
}
</script> <!--En resumen , este código nos permite acceder y manipular el estado y las acciones de Vuex dentro de un componente Vue de forma más sencilla y limpia -->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  /**Se establecen las fuentes a utilizar */
  -webkit-font-smoothing: antialiased;  /**Se suaviza la visualización de la fuente en los navegadores Webkit y Mozilla */
  -moz-osx-font-smoothing: grayscale;
  text-align: center; /**Alinea el texto al centro */
  color: #2c3e50; /**Color de texto */
  margin-top: 60px; /**Margen superior de 60px */
  background-color: rgb(255, 100, 250);

}

table {   /**Se establece que tabla ocupe 100% del ancho disponible */
  width: 100%;
}

table,
th,
td {
  border: 1px solid black;  /**Borde negro  con estilo groove */
  border-style: groove;
}

th,
td {
  padding: .5rem;
  text-align: center;
}
</style>
