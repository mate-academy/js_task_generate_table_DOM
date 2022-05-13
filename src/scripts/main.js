'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
people.map(person => (person.sex = person.sex === 'm' ? 'Male' : 'Female'));

const table = document.querySelector('.dashboard');

table.append(document.createElement('tr'));

for (const person of people) {
  table.append(document.createElement('tr'));

  const personData = Object.values(person).slice(0, 4);
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  personData.push(age, century);

  for (let i = 0; i <= 5; i++) {
    const currentRow = table.lastChild;

    currentRow.append(document.createElement('td'));

    const ceil = currentRow.lastChild;

    ceil.innerText = personData[i];
  }
}
