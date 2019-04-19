import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'Atlas-ai changing the world',
  initialize() {

     withPluginApi('0.1', api => {
       api.onPageChange(() => console.log('user navigated!'));
     });

  }
}