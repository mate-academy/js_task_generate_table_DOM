'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const dashbord = document.querySelector('table');

for (let i = 0; i < people.length; i++) {
  const row = dashbord.insertRow(i + 1);

  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell(j);

    switch (j) {
      case 0:
        cell.innerHTML = people[i].name;
        break;
      case 1:
        cell.innerHTML = getSex(people[i].sex);
        break;
      case 2:
        cell.innerHTML = people[i].born;
        break;
      case 3:
        cell.innerHTML = people[i].died;
        break;
      case 4:
        cell.innerHTML = people[i].died - people[i].born;
        break;
      case 5:
      default:
        cell.innerHTML = Math.ceil(people[i].died / 100);
        break;
    }
  }
}

function getSex(s) {
  return s === 'm' ? 'Male' : 'Female';
}
