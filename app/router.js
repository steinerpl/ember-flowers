import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('welcome', {path: '/'}); // now the root
  this.route('flowers');
  this.route('about');
  this.route('404', {path:'/*'}); // anything that doesn't match a route
});

export default Router;
