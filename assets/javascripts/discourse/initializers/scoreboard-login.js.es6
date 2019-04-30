import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'Atlas-ai changing the world',
  initialize() {

     withPluginApi('0.1', api => {
     	api.onPageChange(() => {
     		console.log('user navigated!');
     		const user = api.getCurrentUser();
     		if (!user) return;
     		console.log(`current user:${user.name}`);
     		console.log('check if login page');
     		});
     });
  }
}