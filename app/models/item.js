import DS from 'ember-data';

var Item = DS.Model.extend({
  seller  : DS.belongsTo('seller', {async: true}),
  price   : DS.attr('number'),
  purchase: DS.belongsTo('purchase')
});

Item.reopenClass({
  FIXTURES: [
    {'id':'1', 'price': 2, 'seller': '1', 'purchase': '1'},
    {'id':'2', 'price': 3, 'seller': '1', 'purchase': '2'},
    {'id':'3', 'price': 6, 'seller': '2', 'purchase': '2'},
    {'id':'4', 'price': 4, 'seller': '2', 'purchase': '2'}
  ]
});

export default  Item;
