'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const list = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const line = document.createElement('tr');
  const nameLine = document.createElement('td');

  nameLine.textContent = people[i].name;
  line.append(nameLine);

  const genderLine = document.createElement('td');

  if (people[i].sex === 'm') {
    genderLine.textContent = 'Male';
  } else {
    genderLine.textContent = 'Female';
  }
  line.append(genderLine);

  const bornLine = document.createElement('td');

  bornLine.textContent = people[i].born;
  line.append(bornLine);

  const diedLine = document.createElement('td');

  diedLine.textContent = people[i].died;
  line.append(diedLine);

  const ageLine = document.createElement('td');

  ageLine.textContent = people[i].died - people[i].born;
  line.append(ageLine);

  const centuryLine = document.createElement('td');

  centuryLine.textContent = Math.ceil(people[i].died / 100);
  line.append(centuryLine);

  list.append(line);
}
