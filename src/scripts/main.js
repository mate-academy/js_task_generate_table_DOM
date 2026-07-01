'use strict';

// write your code here
import people from './lib/people.json';

const table = document.querySelector('.dashboard');

people.forEach((pers) => {
  const row = document.createElement('tr');
  const fullName = document.createElement('td');
  const gender = document.createElement('td');
  const bornCell = document.createElement('td');
  const diedCell = document.createElement('td');
  const yearsOld = document.createElement('td');
  const century = document.createElement('td');

  fullName.textContent = pers.name;
  gender.textContent = pers.sex === 'm' ? 'Male' : 'Female';
  bornCell.textContent = pers.born;
  diedCell.textContent = pers.died;
  yearsOld.textContent = pers.died - pers.born;
  century.textContent = Math.ceil(pers.died / 100);

  row.append(fullName, gender, bornCell, diedCell, yearsOld, century);
  table.appendChild(row);
});
