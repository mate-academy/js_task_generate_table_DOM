'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (let i = 0; i < people.length; i++) {
  const tr = document.createElement('tr');
  const list = document.querySelector('table.dashboard');

  list.append(tr);

  const td1 = document.createElement('td');

  td1.textContent = people[i].name;
  tr.append(td1);

  const td2 = document.createElement('td');

  td2.textContent = people[i].sex;
  tr.append(td2);

  const td3 = document.createElement('td');

  td3.textContent = people[i].born;
  tr.append(td3);

  const td4 = document.createElement('td');

  td4.textContent = people[i].died;
  tr.append(td4);

  const td5 = document.createElement('td');

  td5.textContent = people[i].died - people[i].born;
  tr.append(td5);

  const td6 = document.createElement('td');

  td6.textContent = Math.ceil(people[i].died / 100);
  tr.append(td6);
}

// write your code here
