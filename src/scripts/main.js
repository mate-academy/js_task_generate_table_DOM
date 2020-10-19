'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  person.age = person.died - person.born;
  person.century = Math.ceil(person.died / 100);

  person.sex = (person.sex === 'm') ? 'Male' : 'Female';
  delete person.motherName;
  delete person.fatherName;
  delete person.slug;
});

for (let i = 0; i < people.length; i++) {
  const tr = document.createElement('tr');

  for (const key in people[i]) {
    const td = document.createElement('td');

    tr.append(td);

    td.textContent = people[i][key];
    dashboard.lastChild.append(tr);
  };
}
