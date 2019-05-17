import { withPluginApi } from 'discourse/lib/plugin-api';

function should(searchTerm) {
  return window.location.search.includes(searchTerm) || window.location.pathname.includes(searchTerm);
}

export default {
  name: 'Atlas-ai changing the world',
  initialize() {
    withPluginApi('0.1', api => {
      const user = api.getCurrentUser();
      api.onPageChange(() => {
        console.log('scoreboard plugin loaded');
        if (should('logout')) api.container.lookup("route:application").send("logout");
        if (should('login')) api.container.lookup("route:application").send("showLogin");
      });
    });
  }
}