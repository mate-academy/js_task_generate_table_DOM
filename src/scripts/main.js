'use strict';

const people = require('./lib/people');

function createStrings() {
  const tableTree = document.querySelector('.dashboard');

  for (let i = 0; i < people.length; i++) {
    const createTr = document.createElement('tr');
    let createTd = document.createElement('td');
    const age = people[i].died - people[i].born;
    const century = Math.floor(people[i].died / 100);

    for (const key in people[i]) {
      if (key === 'sex' && people[i][key] === 'm') {
        createTd = document.createElement('td');
        createTd.append('Male');
        createTr.append(createTd);
      } else if (key === 'sex' && people[i][key] === 'f') {
        createTd = document.createElement('td');
        createTd.append('Female');
        createTr.append(createTd);
      } else {
        createTd = document.createElement('td');
        createTd.append(people[i][key]);
        createTr.append(createTd);
      }

      if (key === 'died') {
        createTd = document.createElement('td');
        break;
      }
    }

    createTd.append(age);
    createTr.append(createTd);

    createTd = document.createElement('td');
    createTd.append(century);
    createTr.append(createTd);

    tableTree.append(createTr);
  }
}

createStrings();
