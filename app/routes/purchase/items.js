import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var purchase = this.modelFor('purchase');
    return purchase.get('items');
  }
});
