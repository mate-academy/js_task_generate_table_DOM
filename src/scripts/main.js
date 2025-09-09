'use strict';
import people from './lib/people.json';

const dashboardTable = document.querySelector('.dashboard');
const tBody = dashboardTable.querySelector('tbody');

people.forEach((item) => {
  const age = item.died - item.born;
  const century = Math.ceil(item.died / 100);
  const gender = item.sex === 'm' ? 'Male' : 'Female';

  const tr = document.createElement('tr');

  tr.appendChild(createCell(item.name));
  tr.appendChild(createCell(gender));
  tr.appendChild(createCell(item.born));
  tr.appendChild(createCell(item.died));
  tr.appendChild(createCell(age));
  tr.appendChild(createCell(century));

  tBody.appendChild(tr);
});

function createCell(text) {
  const td = document.createElement('td');

  td.textContent = text;

  return td;
}
