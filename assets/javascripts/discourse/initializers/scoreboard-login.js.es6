import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'Atlas-ai changing the world',
  initialize() {

     withPluginApi('0.1', api => {
     	api.decorateWidget('header-contents:after', () => {
	      return "I am displayed after every post!";
	    });
	    api.decorateWidget('header-contents:after', helper => {
	      return helper.h('div.title', `I'm an HTML paragraph on post with id`);
	    });
	    api.decorateWidget('header:after', helper => {
	      return helper.h('div.title', `I'm an HTML paragraph on post with id`);
	    });
     	api.onPageChange(() => {
     		console.log('user navigated!');
     		api.addNavigationBarItem({
		    	name: "foobar",
			    displayName: "foobar",
			    href: "http://localhost:8081/landing-page/",
			  });
			  api.h('body.static-login', `I'm an HTML paragraph on post with id`);
     		const user = api.getCurrentUser();
     		if (!user) return;
     		console.log(`current user:${user.name}`);
     		console.log('check if login page');
     		});
     });
  }
}