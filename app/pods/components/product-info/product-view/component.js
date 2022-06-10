import Component from '@ember/component';
import {inject as service} from '@ember/service';
import EmberObject, {computed} from '@ember/object';


export default Component.extend({
  store: service(),


  TotalPrice: computed('selectedProducts.[]', function() {
    let total =0;
    this.get('selectedProducts').forEach((product) => {
      total+=product.price
    });
    return total;
  }),

  async init() {
    this._super(...arguments);

  }
});
