'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('tbody');

for (const person of people) {
  const tr = document.createElement('tr');

  table.append(tr);

  const thName = document.createElement('th');

  thName.textContent = person.name;
  tr.append(thName);

  const thGender = document.createElement('th');

  if (person.sex === 'f') {
    thGender.textContent = 'Female';
  }

  if (person.sex === 'm') {
    thGender.textContent = 'Male';
  }

  tr.append(thGender);

  const thBorn = document.createElement('th');

  thBorn.textContent = person.born;
  tr.append(thBorn);

  const thDied = document.createElement('th');

  thDied.textContent = person.died;
  tr.append(thDied);

  const thAge = document.createElement('th');

  thAge.textContent = person.died - person.born;
  tr.append(thAge);

  const thCenture = document.createElement('th');

  thCenture.textContent = Math.ceil(person.born / 100);
  tr.append(thCenture);
}
