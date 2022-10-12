'use strict';

const people = require('./lib/people');

// // eslint-disable-next-line no-console
// console.log(people); // you can remove it

for (const person of people) {
  const table = document.querySelector('tbody');

  const row = document.createElement('tr');

  table.append(row);

  row.insertAdjacentHTML('afterbegin', `
  <th>${person.name}</th>
  <th>${sex(person.sex)}</th>
  <th>${person.born}</th>
  <th>${person.died}</th>
  <th>${person.died - person.born}</th>
  <th>${Math.ceil(person.died / 100)}</th>
  `
  );

  // const namePeople = document.createElement('th');

  // const gender = document.createElement('th');

  // const born = document.createElement('th');

  // const died = document.createElement('th');

  // const age = document.createElement('th');

  // const century = document.createElement('th');

  // namePeople.innerText += (person.name);

  // gender.innerText += (sex(person.sex));

  // born.innerText += (person.born);

  // died.innerText += (person.died);

  // age.innerText += (person.died - person.born);

  // century.innerText += (Math.ceil(person.died / 100));
  // row.append(namePeople, gender, born, died, age, century);
}

function sex(x) {
  if (x === 'm') {
    return 'Male';
  }

  return 'Famale';
}
