import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'Atlas-ai changing the world',
  initialize() {

     withPluginApi('0.1', api => {
      const user = api.getCurrentUser();
      if (!user) return;
      if (window.location.search.includes('logout')) {
        return ajax(`/session/${user.name}`, { type: "DELETE" });
      }
     	api.onPageChange(() => {
     		console.log('user navigated!');
     		console.log(`current user:${user.name}`);
     		console.log('check if login page');
     		});
     });
  }
}