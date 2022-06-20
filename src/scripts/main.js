'use strict';

const people = require('./lib/people');

const tableElem = document.querySelector('.dashboard');

const createRow = (person) => {
  const values = Object.values(person).slice(0, 4);
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  values.push(age, century);

  tableElem.lastElementChild.insertAdjacentHTML('beforeend', `
      ${values.map(prop => `
      <th>${prop}</th>
      `).join('')}
  `);
};

people.forEach(createRow);
