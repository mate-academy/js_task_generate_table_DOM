'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard').children[0];

for (const person of people) {
  const namePerson = person.name;
  const gender = person.sex;
  const born = person.born;
  const died = person.died;
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const trItem = document.createElement('tr');

  table.append(trItem);

  const tdName = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdName.textContent = namePerson;

  if (gender === 'm') {
    tdGender.textContent = 'Male';
  } else {
    tdGender.textContent = 'Female';
  }

  tdBorn.textContent = born;
  tdDied.textContent = died;
  tdAge.textContent = age;
  tdCentury.textContent = century;

  trItem.append(tdName);
  trItem.append(tdGender);
  trItem.append(tdBorn);
  trItem.append(tdDied);
  trItem.append(tdAge);
  trItem.append(tdCentury);
}
