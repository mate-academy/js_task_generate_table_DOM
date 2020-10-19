'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (const key in people) {
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const person = [];

  person[0] = people[key].name;
  person[1] = people[key].sex;
  person[2] = people[key].born;
  person[3] = people[key].died;
  person[4] = people[key].died - people[key].born;
  person[5] = Math.ceil(people[key].died / 100);
  tr.innerHTML = `${person.map(item => `<td>${item}</td>`).join('')}`;
  tbody.append(tr);
}
