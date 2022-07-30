'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

let i = 1;

people.forEach(elem => {
  const tr = document.createElement('tr');

  table.appendChild(tr);
  tr.appendChild(document.createElement('td'));
  tr.appendChild(document.createElement('td'));
  tr.appendChild(document.createElement('td'));
  tr.appendChild(document.createElement('td'));
  tr.appendChild(document.createElement('td'));
  tr.appendChild(document.createElement('td'));
  table.rows[i].cells[0].textContent = elem.name;
  table.rows[i].cells[1].innerHTML = elem.sex;
  table.rows[i].cells[2].textContent = elem.born;
  table.rows[i].cells[3].innerHTML = elem.died;
  table.rows[i].cells[4].textContent = elem.died - elem.born;
  table.rows[i].cells[5].innerHTML = Math.ceil(elem.died / 100);
  i++;
});
