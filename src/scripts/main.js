'use strict';

const people = require('./lib/people');

const tablElement = document.querySelector('.dashboard');

for (const person of people) {
  const trElement = document.createElement('tr');
  const thName = document.createElement('th');

  thName.textContent = person.name;
  trElement.append(thName);

  const thSex = document.createElement('th');

  thSex.textContent = person.sex;
  trElement.append(thSex);

  const thBorn = document.createElement('th');

  thBorn.textContent = person.born;
  trElement.append(thBorn);

  const thDied = document.createElement('th');

  thDied.textContent = person.died;
  trElement.append(thDied);

  const thAge = document.createElement('th');

  thAge.textContent = person.died - person.born;
  trElement.append(thAge);

  const thCentury = document.createElement('th');

  thCentury.textContent = Math.ceil(person.died / 100);
  trElement.append(thCentury);

  tablElement.append(trElement);
}
