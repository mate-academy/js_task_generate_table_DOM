'use strict';

const people = require('./lib/people.json');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
people.map(person => {
  const row = document.createElement('tr');

  const dataName = document.createElement('td');

  dataName.textContent = person.name;
  row.append(dataName);

  const dataGender = document.createElement('td');

  dataGender.textContent = person.sex === 'm' ? 'Male' : 'Female';
  row.append(dataGender);

  const dataBorn = document.createElement('td');

  dataBorn.textContent = person.born;
  row.append(dataBorn);

  const dataDied = document.createElement('td');

  dataDied.textContent = person.died;
  row.append(dataDied);

  const dataAge = document.createElement('td');

  dataAge.textContent = person.died - person.born;
  row.append(dataAge);

  const dataCentury = document.createElement('td');

  dataCentury.textContent = Math.ceil(person.died / 100);
  row.append(dataCentury);

  const table = document.querySelector('.dashboard');

  table.append(row);
});
