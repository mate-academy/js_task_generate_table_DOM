'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');

  const nAme = document.createElement('td');

  nAme.innerHTML = person.name;

  const sex = document.createElement('td');

  sex.innerHTML = person.sex === 'm' ? 'male' : 'female';

  const born = document.createElement('td');

  born.innerHTML = person.born;

  const died = document.createElement('td');

  died.innerText = person.died;

  const age = document.createElement('td');

  age.innerText = +person.died - +person.born;

  const century = document.createElement('td');

  century.innerText = Math.ceil(person.died / 100);

  tr.append(nAme, sex, born, died, age, century);
  table.appendChild(tr);
}
