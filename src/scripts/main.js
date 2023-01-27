'use strict';

const people = require('./lib/people');

for (let i = 0; i < people.length; i++) {
  const row = document.createElement('tr');

  const cellName = document.createElement('td');
  const cellSex = document.createElement('td');
  const cellBorn = document.createElement('td');
  const cellDied = document.createElement('td');
  const cellAge = document.createElement('td');
  const cellCentury = document.createElement('td');

  cellName.innerHTML = people[i].name;
  cellSex.innerHTML = people[i].sex;
  cellBorn.innerHTML = people[i].born;
  cellDied.innerHTML = people[i].died;
  cellAge.innerHTML = people[i].died - people[i].born;
  cellCentury.innerHTML = Math.ceil(people[i].died / 100);

  row.append(cellName);
  row.append(cellSex);
  row.append(cellBorn);
  row.append(cellDied);
  row.append(cellAge);
  row.append(cellCentury);

  const table = document.querySelector('.dashboard');

  table.append(row);
}
