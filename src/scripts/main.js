'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(Array.isArray(people)); // you can remove it

// write your code here

const table = document.querySelector('.dashboard');

valTableName(people);

function male(p) {
  if (p === 'm') {
    return 'Male';
  } else {
    return 'Female';
  }
}

function valTableName(arr) {
  arr.forEach(person => {
    table.insertAdjacentHTML('beforeend', `
   <tr>
     <td>${person.name}</td>
     <td>${male(person.sex)}</td>
     <td>${person.born}</td>
     <td>${person.died}</td>
     <td>${person.died - person.born}</td>
     <td>${Math.ceil(person.died / 100)}</td>
   </tr>
  `);
    // const tr = document.createElement('tr');

    // table.append(tr);
    // tr.appendChild(document.createElement('td')).append(el.name);

    // tr.appendChild(document.createElement('td')).append(male(el.sex));
    // tr.appendChild(document.createElement('td')).append(el.born);
    // tr.appendChild(document.createElement('td')).append(el.died);
    // tr.appendChild(document.createElement('td')).append(el.died - el.born);

    // tr.appendChild(document.createElement('td')).append(
    //   Math.ceil(el.died / 100)
    // );
  });
}
