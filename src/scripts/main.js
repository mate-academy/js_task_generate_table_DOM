'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

const peopleForTable = people.map(function(person) {
  const obj = {
    name: person.name,
    gender: person.sex,
    born: person.born,
    died: person.died,
    age: person.died - person.born,
    century: Math.ceil(person.died / 100),
  };

  obj.gender === 'm' ? obj.gender = 'Male' : obj.gender = 'Female';

  return obj;
});

const table = document.body.querySelector('.dashboard');

peopleForTable.map(person => {
  const tr = document.createElement('tr');

  table.append(tr);

  for (const key in person) {
    const td = document.createElement('td');

    td.innerHTML = person[key];
    tr.append(td);
  }
});
