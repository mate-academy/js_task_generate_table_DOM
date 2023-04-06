'use strict';

const people = require('./lib/people');

const header = document.querySelector('.dashboard').rows[0];
const newRow = document.createElement('tr');

for (let i = 0; i < people.length; i++) {
  let gender = '';

  people[i].sex === 'f' ? gender = 'Male' : gender = 'Female';

  newRow.innerHTML = `
    <tr>
      <td>${people[i].name}</td>
      <td>${gender}</td>
      <td>${people[i].born}</td>
      <td>${people[i].died}</td>
      <td>${people[i].died - people[i].born}</td>
      <td>${Math.ceil(people[i].died / 100)}</td>
    </tr>
  `;
  header.after(newRow.cloneNode(true));
}
