'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

function convGender(text) {
  if (text === 'm') {
    return 'Male';
  } else {
    return 'Female';
  }
}

for (const person of people) {
  const tr = document.createElement('tr');

  table.append(tr);

  const personName = document.createElement('td');

  personName.textContent = person.name;
  tr.append(personName);

  const gender = document.createElement('td');

  gender.textContent = convGender(person.sex);
  tr.append(gender);

  const born = document.createElement('td');

  born.textContent = person.born;
  tr.append(born);

  const died = document.createElement('td');

  died.textContent = person.died;
  tr.append(died);

  const age = document.createElement('td');

  age.textContent = person.died - person.born;
  tr.append(age);

  const century = document.createElement('td');

  century.textContent = Math.ceil(person.died / 100);
  tr.append(century);
}
