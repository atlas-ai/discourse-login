import { withPluginApi } from 'discourse/lib/plugin-api';

function logout(user) {
  if (window.location.search.includes('logout') || window.location.pathname.includes('logout')) {
    user.destroySession().
    then((response) => {
      return window.location.href = 'http://localhost:9292/login';
    })
    .catch(error => console.error(error));
  }
}

export default {
  name: 'Atlas-ai changing the world',
  initialize() {
     withPluginApi('0.1', api => {
      const user = api.getCurrentUser();
      if (!user) return;
      return logout(user);
     	api.onPageChange(() => {
     		console.log('user navigated!');
     		console.log(`current user:${user.name}`);
     		console.log('check if login page');
     		});
     });
  }
}