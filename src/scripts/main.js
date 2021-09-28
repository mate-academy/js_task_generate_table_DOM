'use strict';

const people1 = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people1); // you can remove it

function buildBodyTable(people) {
  const dashboard = document.querySelector('.dashboard');
  const tbody = dashboard.querySelector('tbody');

  people.map((person, index, array) => {
    const age = person.died - person.born;
    const century = Math.ceil(person.died / 100);
    const maskRow = `
      <tr >
        <td>${person.name}</td>
        <td>${person.sex}</td>
        <td>${person.born}</td>
        <td>${person.died}</td>
        <td>${age}</td>
        <td>${century}</td>
      </tr>
    `;

    tbody.insertAdjacentHTML('beforeend', maskRow);
  });
};

buildBodyTable(people1);
