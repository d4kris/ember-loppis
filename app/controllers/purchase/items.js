import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: 'purchase',
  purchase: Ember.computed.alias('controllers.purchase.model'),

  actions : {

    add: function(item) {
      var sellerId = this.get('seller');
      var price = this.get('price');
      if (!price) {
        alert('Ogiltigt pris, försök igen');
        return false;
      }
      price = price * 1;
      var purchase = this.get('purchase');
      if (!sellerId) {
        console.log('setting default seller');
        sellerId = -1;
      }
      var seller = this.store.find('seller', sellerId);
      //TODO catch not found error
      if (!seller) {
        alert('Hittar ingen säljare, kolla igen eller lämna tomt');
        return false;
      }
      var item = this.store.createRecord('item', {
        seller : seller,
        price : price,
        purchase : purchase
      });
      // save item
      // update purchase items and total
      item.save().then(function (newItem) {
          console.log('saved new item with price: ' + price);
          purchase.get('items').then(function(items) {
            items.addObject(newItem);
            purchase.set('count', items.length);
            var total = purchase.get('total');
            total += price;
            purchase.set('total', total);

            purchase.save().then(function() {
                console.log('saved purchase with new total: ' + total);
              },
              function(error) {
                console.log('Failed to save purchase ' + error);
              }
            );
          });
        },
        function (error) {
          console.log('Failed to save item ' + error);
        });
    }
  }

});
