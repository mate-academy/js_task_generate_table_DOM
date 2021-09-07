'use strict';

const people = require('./lib/people');

const table = document.querySelector('tbody');

for (let i = 0; i < people.length; i++) {
  const tr = document.createElement('tr');

  table.append(tr);

  for (let j = 0; j < 6; j++) {
    const obj = {
      0: people[i].name,
      1: people[i].sex === 'm' ? 'Male' : 'Female',
      2: people[i].born,
      3: people[i].died,
      4: people[i].died - people[i].born,
      5: Math.ceil((people[i].died / 100) - 1),
    };

    const td = document.createElement('TD');

    td.append(document.createTextNode(obj[j]));

    tr.append(td);
  }
}

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
