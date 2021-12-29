'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console

for (let i = 0; i < people.length; i++) {
  const str = document.createElement('tr');

  const itemName = document.createElement('td');

  itemName.innerHTML = people[i].name;
  str.append(itemName);

  const itemSex = document.createElement('td');

  itemSex.innerHTML = people[i].sex === 'm' ? 'Male' : 'Female';
  str.append(itemSex);

  const itemBorn = document.createElement('td');

  itemBorn.innerHTML = people[i].born;
  str.append(itemBorn);

  const itemDied = document.createElement('td');

  itemDied.innerHTML = people[i].died;
  str.append(itemDied);

  const itemAge = document.createElement('td');

  itemAge.innerHTML = people[i].died - people[i].born;
  str.append(itemAge);

  const itemCentury = document.createElement('td');

  itemCentury.innerHTML = Math.ceil(people[i].died / 100);
  str.append(itemCentury);

  const target = document.querySelector('.dashboard');

  target.append(str);
}
