'use strict';

const people = require('./lib/people');

for (let i = 0; i < people.length; i++) {
  const line = document.createElement('tr');
  const gender = people[i].sex === 'm' ? 'Male' : 'Female';
  const age = people[i].died - people[i].born;
  const century = Math.ceil(people[i].died / 100);

  document.querySelector('.dashboard').append(line);

  line.innerHTML = `
  <td>${people[i].name}</td>
  <td>${gender}</td>
  <td>${people[i].born}</td>
  <td>${people[i].died}</td>
  <td>${age}</td>
  <td>${century}</td>`;
}
