'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('tbody');
const headers = table.firstChild.children;

people.forEach(person => {
  const tableRow = document.createElement('tr');

  for (let i = 0; i < headers.length; i++) {
    const tableData = document.createElement('td');

    tableRow.append(tableData);

    switch (i) {
      case 0:
        tableData.innerText = person.name;
        break;
      case 1:
        tableData.innerText = person.sex === 'f' ? 'Female' : 'Male';
        break;
      case 2:
        tableData.innerText = person.born;
        break;
      case 3:
        tableData.innerText = person.died;
        break;
      case 4:
        tableData.innerText = person.died - person.born;
        break;
      case 5:
        tableData.innerText = Math.ceil(person.died / 100);
        break;
      default:
        throw new Error('Error from switch case statement');
    }
  }

  table.append(tableRow);
});
