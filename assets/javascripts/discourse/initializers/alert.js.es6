// assets/javascripts/discourse/initializers/backwards-example.js.es6
import { withPluginApi } from 'discourse/lib/plugin-api';

function oldCode() {
  console.log('old plugin api');
}

function initializePlugin(api) {
  withPluginApi('0.1', api => {
     api.onPageChange(() => console.log('user navigated!'));
   });
}

export default {
  name: 'backwards-example',
  initialize() {
     withPluginApi('0.1', api => initializePlugin(api), { noApi: () => oldCode() });
  }
}