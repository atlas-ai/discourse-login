import { withPluginApi } from 'discourse/lib/plugin-api';

function shouldLogout() {
  return window.location.search.includes('logout') || window.location.pathname.includes('logout');
}

export default {
  name: 'Atlas-ai changing the world',
  initialize() {
    withPluginApi('0.1', api => {
      const user = api.getCurrentUser();
      if (shouldLogout()) api.container.lookup("route:application").send("logout");
      api.onPageChange(() => {
        api.container.lookup("route:application").send("showLogin");
      });
    });
  }
}