'use strict';

const people = require('./lib/people');
// write your code here
const table = document.querySelector('.dashboard');

people.map(el => {
  const tr = document.createElement('tr');
  const nameTd = document.createElement('td');
  const genderTd = document.createElement('td');
  const bornTd = document.createElement('td');
  const diedTd = document.createElement('td');
  const ageTd = document.createElement('td');
  const centuryTd = document.createElement('td');

  nameTd.textContent = el.name;
  genderTd.textContent = el.sex === 'm' ? 'Male' : 'Female';
  bornTd.textContent = el.born;
  diedTd.textContent = el.died;
  ageTd.textContent = el.died - el.born;
  centuryTd.textContent = Math.ceil(el.died / 100);

  tr.append(nameTd);
  tr.append(genderTd);
  tr.append(bornTd);
  tr.append(diedTd);
  tr.append(ageTd);
  tr.append(centuryTd);

  table.append(tr);
});
