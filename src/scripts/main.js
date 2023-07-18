'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const mainTab = document.querySelector('.dashboard');

for (let i = 0; i < people.length; i++) {
  const tab = document.createElement('tr');

  const nameColumn = document.createElement('td');

  nameColumn.textContent = people[i].name;
  tab.appendChild(nameColumn);

  const gender = document.createElement('td');

  people[i].sex === 'm'
    ? gender.textContent = 'Male'
    : gender.textContent = 'Female';
  tab.appendChild(gender);

  const born = document.createElement('td');

  born.textContent = people[i].born;
  tab.appendChild(born);

  const died = document.createElement('td');

  died.textContent = people[i].died;
  tab.appendChild(died);

  const age = document.createElement('td');

  age.textContent = people[i].died - people[i].born;
  tab.appendChild(age);

  const century = document.createElement('td');

  century.textContent = Math.ceil(people[i].died / 100);
  tab.appendChild(century);

  mainTab.appendChild(tab);
}
