'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const dashboard = document.querySelector('.dashboard');

for (const person of people) {
  const row = document.createElement('tr');
  const name_ = document.createElement('td');
  const sex = document.createElement('td');
  const born = document.createElement('td');
  const died = document.createElement('td');
  const age = document.createElement('td');
  const century = document.createElement('td');

  name_.textContent = person.name_;
  born.textContent = person.born;
  died.textContent = person.died;
  age.textContent = person.died - person.born;
  century.textContent = Math.ceil(person.died / 100);

  if (person.sex === 'f') {
    sex.textContent = 'Female';
  } else {
    sex.textContent = 'Male';
  }

  row.append(name_);
  row.append(sex);
  row.append(born);
  row.append(died);
  row.append(age);
  row.append(century);
  dashboard.append(row);
}
