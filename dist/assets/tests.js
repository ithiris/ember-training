'use strict';

define("emb-app/tests/integration/components/postlist/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | postlist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vPsd5jpZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"postlist\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZAiO7/jW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"postlist\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });
  QUnit.test('models/products.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/products.js should pass ESLint\n\n');
  });
  QUnit.test('pods/application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/application/route.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/product-info/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-info/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/product-info/product-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/product-info/product-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/product-info/product-view/component.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'pods/components/product-info/product-view/component.js should pass ESLint\n\n3:8 - \'EmberObject\' is defined but never used. (no-unused-vars)');
  });
  QUnit.test('pods/products/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/products/route.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb-app/pods/application/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/application/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/components/product-info/product-list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/product-info/product-list/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/product-info/product-list/template.hbs\n  3:2  error  Incorrect indentation for `<tr>` beginning at L3:C2. Expected `<tr>` to be at an indentation of 4 but was found at 2.  block-indentation\n  14:2  error  Incorrect indentation for `{{#each}}` beginning at L14:C2. Expected `{{#each}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  21:72  error  Incorrect indentation for `td` beginning at L18:C6. Expected `</td>` ending at L21:C72 to be at an indentation of 6 but was found at 67.  block-indentation\n  18:10  error  Incorrect indentation for `<input>` beginning at L18:C10. Expected `<input>` to be at an indentation of 8 but was found at 10.  block-indentation\n  30:41  error  Incorrect indentation for `Delete\n          ` beginning at L30:C41. Expected `Delete\n          ` to be at an indentation of 12 but was found at 41.  block-indentation\n  19:34  error  you must use double quotes in templates  quotes\n  19:61  error  you must use double quotes in templates  quotes\n  28:35  error  you must use double quotes in templates  quotes\n  29:35  error  you must use double quotes in templates  quotes\n  29:53  error  you must use double quotes in templates  quotes\n');
  });
  QUnit.test('emb-app/pods/components/product-info/product-view/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/product-info/product-view/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/product-info/product-view/template.hbs\n  1:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
  QUnit.test('emb-app/pods/components/product-info/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/components/product-info/template.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('emb-app/pods/products/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'emb-app/pods/products/template.hbs should pass TemplateLint.\n\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/model-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/posts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/posts/route-test.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/test-helper", ["emb-app/app", "emb-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-app/tests/unit/models/model-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("emb-app/tests/unit/posts/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts');
      assert.ok(route);
    });
  });
});
define('emb-app/config/environment', [], function() {
  var prefix = 'emb-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
