import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

// Mount function to staarat up the app
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
}

// If we are in dev and in isolaation, call mount inmediaaately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// Export function when running through container
export { mount }