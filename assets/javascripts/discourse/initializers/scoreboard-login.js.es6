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
        if (should('logout')) {
          if (window.localStorage) {
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('apikey');
            window.localStorage.removeItem('csrf');
          } else {
            window.sessionStorage.removeItem('user');
            window.sessionStorage.removeItem('apikey');
            window.sessionStorage.removeItem('csrf');
          }
          api.container.lookup("route:application").send("logout");
        };
        if (should('login')) {
          console.log('show login');
          if (window.localStorage) {
            window.localStorage.removeItem('user');
            window.localStorage.removeItem('apikey');
            window.localStorage.removeItem('csrf');
          } else {
            window.sessionStorage.removeItem('user');
            window.sessionStorage.removeItem('apikey');
            window.sessionStorage.removeItem('csrf');
          }
          api.container.lookup("route:application").send("showLogin");
        }
      });
    });
  }
}