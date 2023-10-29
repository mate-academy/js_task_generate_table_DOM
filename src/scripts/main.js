'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

function createTeble(people) {
  people.forEach(person => {
    const tr = document.createElement('tr');

    const name = document.createElement('td');
    const gender = document.createElement('td');
    const born = document.createElement('td');
    const died = document.createElement('td');
    const age = document.createElement('td');
    const century = document.createElement('td');

    name.textContent = person.name;
    gender.textContent = person.sex;
    born.textContent = person.born;
    died.textContent = person.died;
    age.textContent = getAge(person.born, person.died);
    century.textContent = getCentury(person.died);

    tr.append(name);
    tr.append(gender);
    tr.append(born);
    tr.append(died);
    tr.append(age);
    tr.append(century);

    table.append(tr);
  });
}

function getAge(born, died) {
  return died - born;
}

function getCentury(year) {
  return Math.ceil(year / 100);
}

createTeble(people);
