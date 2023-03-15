'use strict';

const peoples = require('./lib/people');

const table = document.querySelector('.dashboard');

peoples.forEach(people => {
  const row = document.createElement('tr');

  row.insertAdjacentHTML('beforeend', `
      <td>${people.name}</td>
      <td>${people.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${people.born}</td>
      <td>${people.died}</td>
      <td>${people.died - people.born}</td>
      <td>${Math.ceil(people.died / 100)}</td>
  `);

  table.append(row);
});
