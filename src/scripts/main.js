'use strict';

const people = require('./lib/people');

const tableData = document.querySelector('.dashboard').children[0];

for (let i = 0; i < people.length; i++) {
  const item = document.createElement('tr');

  item.innerHTML = `
  <th>${people[i].name}</th>
  <th>${people[i].sex}</th>
  <th>${people[i].born}</th>
  <th>${people[i].died}</th>
  <th>${people[i].died - people[i].born}</th>
  <th>${Math.ceil(people[i].died / 100)}</th>
  `;

  tableData.append(item);
}
