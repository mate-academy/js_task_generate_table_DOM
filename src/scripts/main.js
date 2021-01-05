'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('table.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const tdName = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdName.textContent = person.name;
  tdGender.textContent = person.sex === 'm' ? 'Male' : 'Female';
  tdBorn.textContent = person.born;
  tdDied.textContent = person.died;
  tdAge.textContent = person.died - person.born;
  tdCentury.textContent = Math.ceil(person.died / 100);

  row.append(tdName);
  row.append(tdGender);
  row.append(tdBorn);
  row.append(tdDied);
  row.append(tdAge);
  row.append(tdCentury);

  table.append(row);
});
