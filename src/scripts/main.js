'use strict';

const people = require('./lib/people');

// eslint-disable-next-line no-console
console.log(people); // you can remove it

// write your code here
const table = document.querySelector('.dashboard');
const tableTh = table.querySelectorAll('th');

for (let i = 0; i < people.length; i++) {
  const person = people[i];
  const tr = document.createElement('tr');

  for (const index of tableTh) {
    const text = index.textContent;

    switch (text) {
      case 'Name':
        const tdName = document.createElement('td');

        tdName.innerHTML = `${person.name}`;
        tr.append(tdName);
        break;

      case 'Gender':
        const tdGender = document.createElement('td');

        if (`${person.sex}` === 'm') {
          tdGender.innerHTML = 'Male';
        } else {
          tdGender.innerHTML = 'Female';
        }

        tr.append(tdGender);
        break;

      case 'Born':
        const tdBorn = document.createElement('td');

        tdBorn.innerHTML = `${person.born}`;
        tr.append(tdBorn);
        break;

      case 'Died':
        const tdDied = document.createElement('td');

        tdDied.innerHTML = `${person.died}`;
        tr.append(tdDied);
        break;

      default:
        break;
    }
  }

  const tdAge = document.createElement('td');
  const tdCentury = document.createElement('td');

  tdAge.innerHTML = `${person.died}` - `${person.born}`;
  tr.append(tdAge);
  tdCentury.innerHTML = Math.ceil(`${person.died}` / 100);
  tr.append(tdCentury);
  table.append(tr);
}
