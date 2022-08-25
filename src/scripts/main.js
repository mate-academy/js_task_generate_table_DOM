'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

people.forEach(person => {
  const theTable = document.querySelector('.dashboard');

  const tableRow = document.createElement('tr');
  const personName = document.createElement('td');
  const personGender = document.createElement('td');
  const personBorn = document.createElement('td');
  const personDied = document.createElement('td');
  const personAge = document.createElement('td');
  const personCentury = document.createElement('td');

  personName.innerText = person.name;
  personGender.innerText = person.sex;
  personBorn.innerText = person.born;
  personDied.innerText = person.died;
  personAge.innerText = person.died - person.born;
  personCentury.innerText = Math.ceil(person.died / 100);

  tableRow.insertAdjacentElement('afterbegin', personCentury);
  tableRow.insertAdjacentElement('afterbegin', personAge);
  tableRow.insertAdjacentElement('afterbegin', personDied);
  tableRow.insertAdjacentElement('afterbegin', personBorn);
  tableRow.insertAdjacentElement('afterbegin', personGender);
  tableRow.insertAdjacentElement('afterbegin', personName);

  theTable.append(tableRow);
});
