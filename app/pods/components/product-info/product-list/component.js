import Component from "@ember/component";
import {inject as service} from "@ember/service";

// eslint-disable-next-line no-unused-vars
const productsInfo = [
  {
    name: "redmi",
    description: "ss",
    price: 2000,
    type: "Mobile",
  },
  {
    name: "sony",
    description: "sss",
    price: 300,
    type: "headSet",
  },
  {
    name: "TV",
    description: "ddd",
    price: 5000,
    type: "appearal",
  },
  {
    name: "cycle",
    description: "ccc",
    price: 3000,
    type: "hero",
  },
  {
    name: "pen",
    description: "eee",
    price: 250,
    type: "hero",
  },
  {
    productId: 6,
    name: "soap",
    description: "fff",
    price: 100,
    type: "sandal",
  },
];

export default Component.extend({
  store: service(),
  products: null,
  isChecked: false,
  selectedProducts: null,

  async init() {
    this._super(...arguments);
    this.set("products", []);
    this.set("selectedProducts", []);

    productsInfo.forEach((product) => {
      const list = this.store.createRecord("products", product);
      this.products.pushObject(list);
    });
  },
  actions: {
    onCheckBoxRowClick(target) {
      const value = target.value;
      const products = this.get('products');
      const selectedProducts = this.get('selectedProducts');
      if (target.checked) {
        const selectedProduct = products.filter(ele => ele.name === value);
        this.selectedProducts.pushObject(...selectedProduct);
        return this.set('isChecked', true);
      }
      const unCheckedProduct = selectedProducts.filter(ele => ele.name !== value);
      this.set('selectedProducts', unCheckedProduct);
      this.set('isChecked', false);
    },

    onDelecte(target) {
      const value = target.value;
      let productList = this.store.peekAll('products');
      const selectedProduct = productList.filter(ele => ele.name === value);
      selectedProduct.firstObject.destroyRecord();
      this.set('products', productList);

    }
  }
});
