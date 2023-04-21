'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const tr = document.createElement('tr');
  const td = document.createElement('td');

  tr.append(td);

  td.textContent = person.sex;

  tr.append(td.cloneNode(true));
  td.textContent = person.born;

  tr.append(td.cloneNode(true));
  td.textContent = person.died;

  tr.append(td.cloneNode(true));
  td.textContent = person.died - person.born;

  tr.append(td.cloneNode(true));
  td.textContent = Math.ceil(person.died / 100);

  tr.append(td.cloneNode(true));
  td.textContent = person.name;

  dashboard.insertAdjacentElement('beforeend', tr);
});
