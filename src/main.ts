import { createApp } from 'vue';
import App from './app.vue';
import AmplifyVue from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify'; // Import Amplify from the correct module
import config from './amplifyconfiguration.json'; // Make sure the path to your config is correct

Amplify.configure(config);

const app = createApp(App);
app.use(AmplifyVue);
app.mount('#app');