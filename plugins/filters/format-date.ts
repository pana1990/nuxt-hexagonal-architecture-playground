import Vue from 'vue';

Vue.filter('formatDate', (value: Date) => {
  return value.toLocaleString(['en-US'], { timeZone: 'UTC' });
});
