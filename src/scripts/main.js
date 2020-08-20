'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

for (let i = 0; i < people.length; i++) {
  const tr = document.createElement('tr');
  const list = document.querySelector('table.dashboard');

  list.append(tr);

  for (const key in people[i]) {
    const td1 = document.createElement('td');

    switch (key) {
      case 'name':
        td1.textContent = people[i].name;
        tr.append(td1);
        break;
      case 'sex':
        td1.textContent = people[i].sex;
        tr.append(td1);
        break;
      case 'born':
        td1.textContent = people[i].born;
        tr.append(td1);
        break;
      case 'died':
        td1.textContent = people[i].died;
        tr.append(td1);
        break;
    }
  }

  const td2 = document.createElement('td');

  td2.textContent = people[i].died - people[i].born;
  tr.append(td2);

  const td3 = document.createElement('td');

  td3.textContent = Math.ceil(people[i].died / 100);
  tr.append(td3);
}

// write your code here
