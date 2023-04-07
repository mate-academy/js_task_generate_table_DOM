'use strict';

const people = require('./lib/people');
const tables = document.querySelector('.dashboard');

const arrInfo = ['Name', 'Gender', 'Born', 'Died', 'Age', 'Century'];

people.forEach(obj => {
  const tr = document.createElement('tr');
  const keysObj = Object.keys(obj);

  tables.appendChild(tr);

  for (let i = 0; i < arrInfo.length; i++) {
    const td = document.createElement('td');

    tr.appendChild(td);

    if (arrInfo[i] === 'Name') {
      td.innerText = obj.name;
    }

    if (arrInfo[i] === 'Gender' && obj.sex === 'm') {
      td.innerText = 'Male';
    } else if (obj.sex === 'f') {
      td.innerText = 'Female';
    }

    if (arrInfo[i] === 'Born') {
      td.innerText = obj.born;
    }

    if (arrInfo[i] === 'Died') {
      td.innerText = obj.died;
    }

    if (arrInfo[i] === 'Age') {
      td.innerText = obj.died - obj.born;
    }

    if (arrInfo[i] === 'Century') {
      td.innerText = Math.ceil(obj.born / 100);
    }
  }
});
// write your code here
