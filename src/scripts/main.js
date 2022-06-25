'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('tbody');

for (let i = 0; i < people.length; i++) {
  const tr = document.createElement('tr');

  table.append(tr);

  for (let k = 0; k < 6; k++) {
    const td = document.createElement('td');

    tr.append(td);

    if (k === 0) {
      td.innerText = people[i].name;
    }

    if (k === 1) {
      (people[i].sex === 'm') ? td.innerText = 'male' : td.innerText = 'female';
    }

    if (k === 2) {
      td.innerText = people[i].born;
    }

    if (k === 3) {
      td.innerText = people[i].died;
    }

    if (k === 4) {
      td.innerText = people[i].died - people[i].born;
    }

    if (k === 5) {
      td.innerText = Math.ceil(people[i].died / 100);
    }
  }
}
