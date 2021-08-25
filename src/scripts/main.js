'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here

const dashboard = document.querySelector('.dashboard');

people.forEach(element => {
  const age = element.died - element.born;
  const century = Math.ceil(element.died / 100);
  const person = document.createElement('tr');
  let gender;

  dashboard.append(person);

  if (element.sex === 'm') {
    gender = 'male';
  } else if (element.sex === 'f') {
    gender = 'female';
  };

  person.innerHTML = `
    <tr>
      <th>${element.name}</th>
      <th>${gender}</th>
      <th>${element.born}</th>
      <th>${element.died}</th>
      <th>${age}</th>
      <th>${century}</th>
    </tr>
  `;

  return element;
});
