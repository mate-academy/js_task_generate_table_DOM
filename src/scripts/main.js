'use strict';

const people = require('./lib/people');

const header = document.querySelector('.dashboard').rows[0];
const newRow = document.createElement('tr');

people.forEach(person => {
  const gender = person.sex === 'f' ? 'Male' : 'Female';

  newRow.innerHTML = `
    <tr>
      <td>${person.name}</td>
      <td>${gender}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>
  `;
  header.after(newRow.cloneNode(true));
});
