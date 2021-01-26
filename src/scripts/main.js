'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const el = document.querySelector('.dashboard');

for (const person of people) {
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');

  tdName.textContent = person.name;
  tr.append(tdName);

  const tdSex = document.createElement('td');

  tdSex.textContent = person.sex;

  if (tdSex.textContent === 'm') {
    tdSex.textContent = 'Male';
  } else {
    tdSex.textContent = 'Female';
  }
  tr.append(tdSex);

  const tdBorn = document.createElement('td');

  tdBorn.textContent = person.born;
  tr.append(tdBorn);

  const tdDied = document.createElement('td');

  tdDied.textContent = person.died;
  tr.append(tdDied);

  const tdAge = document.createElement('td');

  tdAge.textContent = person.died - person.born;
  tr.append(tdAge);

  const tdCentury = document.createElement('td');

  tdCentury.textContent = Math.ceil(person.died / 100);
  tr.append(tdCentury);

  el.append(tr);
}
