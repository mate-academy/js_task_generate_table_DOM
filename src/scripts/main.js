'use strict';

const people = require('./lib/people');

// write your code here
// We can write just 'tbody', but it looks strange to me without 'dashboard'
const tableBody = document.querySelector('.dashboard').querySelector('tbody');

people.forEach((person) => {
  const tableRowMarkup = `
    <tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `;

  tableBody.insertAdjacentHTML('beforeend', tableRowMarkup);
});
