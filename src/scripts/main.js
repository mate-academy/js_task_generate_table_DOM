'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('table.dashboard');

people.forEach(person => {
  const row = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = person.name;
  const tdGender = document.createElement('td');
  tdGender.textContent = person.sex;
  const tdBorn = document.createElement('td');
  tdBorn.textContent = person.born;
  const tdDied = document.createElement('td');
  tdDied.textContent = person.died;
  const tdAge = document.createElement('td');
  tdAge.textContent = person.died - person.born;
  const tdCentury = document.createElement('td');
  tdCentury.textContent = Math.ceil(person.born/100);

  row.append(tdName);
  row.append(tdGender);
  row.append(tdBorn);
  row.append(tdDied);
  row.append(tdAge);
  row.append(tdCentury);

  table.append(row);
})

