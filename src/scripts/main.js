'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');

  const fullName = document.createElement('td');

  fullName.textContent = people[i].name;
  row.appendChild(fullName);

  const sex = document.createElement('td');

  sex.textContent = (people[i].sex === 'm') ? 'Male' : 'Female';
  row.appendChild(sex);

  const born = document.createElement('td');

  born.textContent = people[i].born;
  row.appendChild(born);

  const died = document.createElement('td');

  died.textContent = people[i].died;
  row.appendChild(died);

  const age = document.createElement('td');

  age.textContent = people[i].died - people[i].born;
  row.appendChild(age);

  const century = document.createElement('td');

  century.textContent = Math.ceil(people[i].died / 100);
  row.appendChild(century);

  table.appendChild(row);
}
