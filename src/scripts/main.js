'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  table.insertAdjacentElement('beforeend', tr);

  for (const key in getPersonData(person)) {
    const td = document.createElement('td');

    td.innerText = getPersonData(person)[key];
    tr.insertAdjacentElement('beforeend', td);
  }
}

function getAge({ born, died }) {
  return +died - +born;
}

function getCentury({ died }) {
  return Math.ceil(died / 100);
}

function getPersonData(person) {
  const copy = { ...person };

  delete copy.fatherName;
  delete copy.motherName;
  delete copy.slug;

  copy.age = getAge(copy);
  copy.century = getCentury(copy);
  copy.sex = copy.sex === 'm' ? 'Male' : 'Female';

  return copy;
}
