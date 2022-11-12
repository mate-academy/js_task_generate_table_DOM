'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
// console.log(people); // you can remove it

const container = document.querySelector('.dashboard');

people.forEach(({ name: fullName, sex, born, died }) => {
  const row = document.createElement('tr');

  row.innerHTML = `
        <td>${fullName}</td>
        <td>${sex}</td>
        <td>${born}</td>
        <th>${died}</td>
        <td>${died - born}</td>
        <td>${Math.ceil(died / 100)}</td>    
    `;

  container.append(row);
});
