import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: '1', name: 'Brian'},
      {id: '2', name: 'Erin'}
    ];
  }
});
