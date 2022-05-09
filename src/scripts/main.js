'use strict';

const people = require('./lib/people');
const table = document.getElementsByClassName('dashboard')[0];

people.forEach(person => {
  const row = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdSex = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentry = document.createElement('td');

  tdName.innerText = person.name;
  tdBorn.innerText = person.born;
  tdDied.innerText = person.died;
  tdAge.innerText = person.died - person.born;
  tdCentry.innerText = Math.ceil(person.died / 100);

  if (person.sex === 'm') {
    tdSex.innerText = 'Man';
  } else {
    tdSex.innerText = 'Female';
  }

  row.append(tdName);
  row.append(tdSex);
  row.append(tdBorn);
  row.append(tdDied);
  row.append(tdDied);
  row.append(tdAge);
  row.append(tdCentry);
  table.append(row);
});
