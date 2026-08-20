'use strict';
import people from './lib/people.json';

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

function fillUpTable(arr) {
  arr.forEach((item) => {
    const row = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdGender = document.createElement('td');
    const tdBorn = document.createElement('td');
    const tdDied = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdCentury = document.createElement('td');

    tdName.textContent = item.name;
    tdGender.textContent = item.sex === 'm' ? 'Male' : 'Female';
    tdBorn.textContent = item.born;
    tdDied.textContent = item.died;
    tdAge.textContent = item.died - item.born;
    tdCentury.textContent = Math.ceil(item.died / 100);

    row.append(tdName, tdGender, tdBorn, tdDied, tdAge, tdCentury);

    table.appendChild(row);
  });
}

fillUpTable(people);
