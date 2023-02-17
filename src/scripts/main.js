'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard');

people.forEach(({ name: namePerson, sex, born, died }) => {
  let gender = null;

  if (sex === 'm') {
    gender = 'Male';
  } else {
    gender = 'Female';
  }

  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdGender = document.createElement('td');
  const tdBorn = document.createElement('td');
  const tdDied = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdCentry = document.createElement('td');

  tdName.textContent = namePerson;
  tdGender.textContent = gender;
  tdBorn.textContent = born;
  tdDied.textContent = died;
  tdAge.textContent = died - born;
  tdCentry.textContent = Math.ceil(died / 100);

  tr.append(tdName);
  tr.append(tdGender);
  tr.append(tdBorn);
  tr.append(tdDied);
  tr.append(tdAge);
  tr.append(tdCentry);

  table.append(tr);
});
