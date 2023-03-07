import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './css/styles.css';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";
const app = createApp(App).use(Quasar, quasarUserOptions)

app.use(createPinia())
app.use(router)

app.mount('#app')
