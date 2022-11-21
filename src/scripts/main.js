'use strict';
function gender(sex) {
  if (sex === 'm') {
    return 'Male';
  }

  return 'Female';
}

const people = require('./lib/people');
let table = document.querySelector('.dashboard tbody');
let row = table.insertRow();

for (let i = 0; i < people.length; i++) {
  row = table.insertRow(i + 1);
  table.appendChild(row);

  row.insertCell(0)
    .innerHTML = people[i].name;
  row.insertCell(1)
    .innerHTML = gender(people[i].sex);
  row.insertCell(2)
    .innerHTML = people[i].born;
  row.insertCell(3)
    .innerHTML = people[i].died;
  row.insertCell(4)
    .innerHTML = people[i].died - people[i].born;
  row.insertCell(5)
    .innerHTML = Math.ceil(people[i].died / 100);

  //row = table.insertRow(i + 2);

}
