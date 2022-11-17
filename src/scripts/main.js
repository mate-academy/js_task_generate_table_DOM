'use strict';

const people = require('./lib/people');

people.forEach(person => {
  const tr = document.createElement('tr');

  const tdName = document.createElement('td');

  tdName.textContent = person.name;
  tr.append(tdName);

  const tdSex = document.createElement('td');

  tdSex.textContent = person.sex;
  tr.append(tdSex);

  const tdBorn = document.createElement('td');

  tdBorn.textContent = person.born;
  tr.append(tdBorn);

  const tdDied = document.createElement('td');

  tdDied.textContent = person.died;
  tr.append(tdDied);

  const tdAge = document.createElement('td');

  tdAge.textContent = person.died - person.born;
  tr.append(tdAge);

  const tdCentury = document.createElement('td');

  tdCentury.textContent = Math.ceil(person.died / 100);
  tr.append(tdCentury);

  document.querySelector('.dashboard').append(tr);
});
