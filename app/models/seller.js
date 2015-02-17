import DS from 'ember-data';

var Seller = DS.Model.extend({
  total  : DS.attr('number'),
  items  : DS.hasMany('item', {async: true}),
  paid   : DS.attr('boolean'),
  comment: DS.attr('string')
});

Seller.reopenClass({
  FIXTURES: [
    {'id':'-1', 'total': 0, 'paid': 'false', 'items': ['1','2']},
    {'id':'1', 'total': 5, 'paid': 'false', 'items': ['1','2']},
    {'id':'2', 'total': 10, 'paid': 'true', 'items': ['4','3']}
  ]
});

export default  Seller;
