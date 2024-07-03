import { createApp } from 'vue' /**Importa la función createApp desde el paquete Vue, que se utilizará para crear la instancia de la aplicación. */
import App from './App.vue' /**Importa el componente App.vue que contiene la estructura y lógica de la aplicación */
import store from './store' /**Importa la tienda (store) que se utilizará para almacenar y gestionar el estado de la aplicación */

createApp(App).use(store).mount('#app')
/**Luego se crea la instancia de la aplicación llamando a la función createApp y pasando el componente App.vue como argumento */
/**A continuación  se utiliza el método .use() para agregar el store a la instancia de la aplicación , lo que permite el manejo del estado global de la aplicación. */
/**Finanlmente, se monta la instancia de la aplicación en el elemento con el id app en el DOM utilizando el método .mount(). Esto hace que la aplicación se renderice y empiece a funcionar en el navegador */
