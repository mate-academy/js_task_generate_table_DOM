'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const person = document.querySelector('.dashboard');

for (const user of people) {
  user.age = user.died - user.born;
  user.century = Math.ceil(user.died / 100);

  const userTable = document.createElement('tr');

  userTable.insertAdjacentHTML('beforeend', `
    <td>${user.name}</td>
    <td>${user.sex === 'm' ? 'Male' : 'Female'}</td>
    <td>${user.born}</td>
    <td>${user.died}</td>
    <td>${user.age}</td>
    <td>${user.century}</td>

  `);

  person.append(userTable);
}
