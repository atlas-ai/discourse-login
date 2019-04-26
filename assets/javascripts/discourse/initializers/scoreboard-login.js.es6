import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'Atlas-ai changing the world',
  initialize() {

     withPluginApi('0.1', api => {
 			console.log(api.getCurrentUser());
     	api.onPageChange(() => console.log('user navigated!'));
     });
  }
}