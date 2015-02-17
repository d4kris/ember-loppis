import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('purchase', {
    path: ":id"
  }, function() {
    this.route('items');
  });
  this.resource('list', function() {});
  this.route('new');
});

export default Router;
