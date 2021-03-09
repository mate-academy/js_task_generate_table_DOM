'use strict';

const people = require('./lib/people');

function createTable(allPersons) {
  const generaTable = document.querySelector('.dashboard').children[0];

  for (let i = 0; i < people.length; i++) {
    const fullSexName = people[i].sex === 'm'
      ? 'Male'
      : 'Female';

    const row = document.createElement('tr');

    generaTable.append(row);

    row.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${allPersons[i].name}</td>
      <td>${fullSexName}</td>
      <td>${allPersons[i].born}</td>
      <td>${allPersons[i].died}</td>
      <td>${allPersons[i].died - allPersons[i].born}</td>
      <td>${Math.ceil(allPersons[i].died / 100)}</td>
    </tr>
    `);
  };
};

createTable(people);
