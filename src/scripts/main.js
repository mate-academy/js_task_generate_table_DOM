'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(Array.isArray(people)); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

valTableName(people);

function valTableName(arr) {
  arr.forEach(el => {
    const tr = document.createElement('tr');

    table.append(tr);
    tr.appendChild(document.createElement('td')).append(el.name);

    tr.appendChild(document.createElement('td')).append(male(el.sex));
    tr.appendChild(document.createElement('td')).append(el.born);
    tr.appendChild(document.createElement('td')).append(el.died);
    tr.appendChild(document.createElement('td')).append(el.died - el.born);

    tr.appendChild(document.createElement('td')).append(
      Math.ceil(el.died / 100)
    );
  });
}

function male(person) {
  if (person === 'm') {
    return 'Male';
  } else {
    return 'Female';
  }
}
