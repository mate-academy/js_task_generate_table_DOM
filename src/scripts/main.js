'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('table');
const personAge = people.map(person => person.died - person.born);
const personCentury = people.map(person => Math.ceil(person.died / 100));

for (let i = 0; i < people.length; i++) {
  const tr = document.createElement('tr');

  const name1 = document.createElement('td');

  name1.innerHTML = people[i].name;
  tr.append(name1);

  const gender = document.createElement('td');

  if (people[i].sex === 'f') {
    gender.innerHTML = 'Female';
  } else if (people[i].sex === 'm') {
    gender.innerHTML = 'Male';
  }

  tr.append(gender);

  const born = document.createElement('td');

  born.innerHTML = people[i].born;
  tr.append(born);

  const died = document.createElement('td');

  died.innerHTML = people[i].died;
  tr.append(died);

  const age = document.createElement('td');

  age.innerHTML = personAge[i];
  tr.append(age);

  const century = document.createElement('td');

  century.innerHTML = personCentury[i];
  tr.append(century);

  table.append(tr);
}
