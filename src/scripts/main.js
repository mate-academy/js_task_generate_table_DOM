'use strict';

const people = require('./lib/people');
const dashboard = document.querySelector('.dashboard');

people.forEach(person => {
  const { name: personName, sex, born, died } = person;
  const personObj = {
    personName,
    sex: sex === 'm' ? 'Male' : 'Female',
    born,
    died,
    age: died - born,
    century: Math.ceil(died / 100),
  };

  const th = document.createElement('tr');

  dashboard.append(th);

  Object.values(personObj).forEach(value => {
    const td = document.createElement('td');

    td.innerText = value;

    th.append(td);
  });
});
