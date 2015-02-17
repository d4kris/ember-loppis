import DS from 'ember-data';

var Purchase = DS.Model.extend({
  items  : DS.hasMany('item', {async:true}),
  comment: DS.attr('string'),
  total  : DS.attr('number'),
  count  : DS.attr('number')
});

Purchase.reopenClass({
  FIXTURES: [
    {'id':'1', 'total': 2, 'comment': '1', 'items': ['1'], 'count': 1},
    {'id':'2', 'total': 13, 'comment': '2', 'items': ['2','3','4'], 'count': 3}
  ]
});

export default Purchase;
