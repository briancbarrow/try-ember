import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      {id: '1', name: 'Brian'},
      {id: '2', name: 'Erin'}
    ].findBy('id', params.order_id);
  }
});
