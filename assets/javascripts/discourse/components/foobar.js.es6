export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    this.setProperties({
      foo: "bar",
    });
    debugger;
  },

  didRender() {
    debugger;
  },

  didInsertElement() {
    this._super(...arguments);
    debugger;
    console.log('didInsertElement');
  },

  actions: {
    foobar(event) {
      console.log('foobar');
    },
  },
});
