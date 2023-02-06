'use strict';

const people = require('./lib/people');

const tbl = document.getElementsByClassName('dashboard')[0];

people.forEach(el => {
  const tr = document.createElement('tr');
  let td = document.createElement('td');

  td.innerHTML = el.name;
  tr.append(td);

  td = document.createElement('td');
  td.innerHTML = el.sex === 'f' ? 'Female' : 'Male';
  tr.append(td);

  td = document.createElement('td');
  td.innerHTML = el.born;
  tr.append(td);

  td = document.createElement('td');
  td.innerHTML = el.died;
  tr.append(td);

  td = document.createElement('td');
  td.innerHTML = el.died - el.born;
  tr.append(td);

  td = document.createElement('td');
  td.innerHTML = Math.ceil(el.died / 100);
  tr.append(td);

  tbl.append(tr);
});
