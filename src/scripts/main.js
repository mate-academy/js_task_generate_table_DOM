'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');

  table.append(tr);

  ['name', 'gender', 'born', 'died', 'age', 'century'].forEach(section => {
    const td = document.createElement('td');

    tr.append(td);

    switch (section) {
      case 'name':
        td.innerText = person.name;
        break;
      case 'gender':
        td.innerText = person.sex === 'm' ? 'Male' : 'Female';
        break;
      case 'born':
        td.innerText = person.born;
        break;
      case 'died':
        td.innerText = person.died;
        break;
      case 'age':
        td.innerText = person.died - person.born;
        break;
      case 'century':
        td.innerText = Math.ceil(person.died / 100);
        break;
    }
  });
});
