'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdName.textContent = person.name;
  tdGender.textContent = person.sex;
  tdBorn.textContent = person.born;
  tdDied.textContent = person.died;
  tdAge.textContent = person.died - person.born;
  tdCentury.textContent = Math.ceil(person.died / 100);

  tr.append(tdName, tdGender, tdBorn, tdDied, tdAge, tdCentury);
  table.append(tr);
});
