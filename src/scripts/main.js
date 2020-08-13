'use strict';

const people = require('./lib/people');

const tableTree = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const createTr = document.createElement('tr');

  for (const key in people[i]) {
    if (key === 'slug') {
      break;
    }

    const createTd = document.createElement('td');

    switch (key) {
      case 'name':
      case 'born':
      case 'died':
        createTd.textContent = people[i][key];
        break;

      case 'sex':
        createTd.textContent = people[i][key] === 'f' ? 'Female' : 'Male';
        break;

      case 'fatherName':
        createTd.textContent = people[i].died - people[i].born;
        break;

      case 'motherName':
        createTd.textContent = Math.floor(people[i].died / 100);
        break;
    }
    createTr.append(createTd);
  }
  tableTree.append(createTr);
}
