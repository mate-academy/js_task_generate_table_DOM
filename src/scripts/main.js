'use strict';

import people from './lib/people.json';

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const tbody = document.querySelector('.dashboard tbody');

people.forEach((person) => {
  const { name: fullName, sex, born, died } = person;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const tr = document.createElement('tr');
  const rowValues = [
    fullName,
    sex === 'm' ? 'Male' : 'Female',
    born,
    died,
    age,
    century,
  ];

  rowValues.forEach((el) => {
    const td = document.createElement('td');

    td.insertAdjacentText('beforeend', el);
    tr.insertAdjacentElement('beforeend', td);
  });

  tbody.insertAdjacentElement('beforeend', tr);
});
