'use strict';

const people = require('./lib/people');
const tables = document.querySelector('.dashboard');

const arrInfoHeader = ['Name', 'Gender', 'Born', 'Died', 'Age', 'Century'];

people.forEach(obj => {
  const tr = document.createElement('tr');

  tables.appendChild(tr);

  for (let i = 0; i < arrInfoHeader.length; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);

    if (arrInfoHeader[i] === 'Name') {
      td.innerText = obj.name;
    }

    if (arrInfoHeader[i] === 'Gender' && obj.sex === 'm') {
      td.innerText = 'Male';
    } else if (obj.sex === 'f') {
      td.innerText = 'Female';
    }

    if (arrInfoHeader[i] === 'Born') {
      td.innerText = obj.born;
    }

    if (arrInfoHeader[i] === 'Died') {
      td.innerText = obj.died;
    }

    if (arrInfoHeader[i] === 'Age') {
      td.innerText = obj.died - obj.born;
    }

    if (arrInfoHeader[i] === 'Century') {
      td.innerText = Math.ceil(obj.born / 100);
    }
  }
});
// write your code here
