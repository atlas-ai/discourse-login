import { withPluginApi } from 'discourse/lib/plugin-api';

function logout(user) {
  user.destroySession().
  then((response) => {
    return window.location.href = 'http://localhost:9292/login';
  })
  .catch(error => console.error(error));
}

function shouldLogout() {
  return window.location.search.includes('logout') || window.location.pathname.includes('logout');
}

export default {
  name: 'Atlas-ai changing the world',
  initialize() {
    withPluginApi('0.1', api => {
      const user = api.getCurrentUser();
      if (shouldLogout()) return logout(user);
      api.onPageChange(() => {
        const loginButton = document.querySelector('.login-button');
        loginButton.click();
      });
    });
  }
}