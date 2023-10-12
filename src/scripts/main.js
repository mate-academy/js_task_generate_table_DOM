'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard');

people.forEach(person => {
  const wrapperTable = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdSex = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentery = document.createElement('td');

  tdName.innerText = person.name;
  tdSex.innerText = person.sex;
  tdBorn.innerText = person.born;
  tdDied.innerText = person.died;
  tdAge.innerText = person.died - person.born;
  tdCentery.innerText = Math.ceil(person.died / 100);

  table.append(wrapperTable);
  wrapperTable.append(tdName);
  wrapperTable.append(tdSex);
  wrapperTable.append(tdBorn);
  wrapperTable.append(tdDied);
  wrapperTable.append(tdAge);
  wrapperTable.append(tdCentery);
});
