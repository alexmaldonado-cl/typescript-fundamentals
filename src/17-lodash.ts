// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
      username: 'Valentina',
      role: 'seller'
  },
  {
      username: 'Zulema',
      role: 'seller'
  },
  {
      username: 'Santiago',
      role: 'customer'
  }
];


const result = _.groupBy(data, (item) => item.role);
console.log(result);
