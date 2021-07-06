'use strict';

const people = require('./lib/people');
const getTable = document.querySelector('.dashboard');

people.forEach(person => {
  const newTr = document.createElement('tr');

  for (let i = 0; i < 6; i++) {
    const createTh = document.createElement('th');

    if (i === 0) {
      createTh.innerText = person.name;
    };

    if (i === 1) {
      createTh.innerText = (person.sex === 'm')
        ? 'male'
        : 'famale';
    };

    if (i === 2) {
      createTh.innerText = person.born;
    };

    if (i === 3) {
      createTh.innerText = person.died;
    };

    if (i === 4) {
      createTh.innerText = person.died - person.born;
    };

    if (i === 5) {
      createTh.innerText = Math.ceil(person.died / 100);
    };

    newTr.append(createTh);
  };
  getTable.append(newTr);
});
