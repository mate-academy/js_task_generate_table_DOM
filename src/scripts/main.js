'use strict';

const people = require('./lib/people');

const table = document.querySelector('.dashboard').querySelector('tbody');

for (const item of people) {
  const age = item.died - item.born;

  const century = Math.ceil(item.died / 100);

  let sex;

  if (item.sex === 'm') {
    sex = 'Male';
  } else {
    sex = 'Female';
  }

  table.insertAdjacentHTML('beforeend',
    `<tr>
      <th>${item.name}</th>
      <th>${sex}</th>
      <th>${item.born}</th>
      <th>${item.died}</th>
      <th>${age}</th>
      <th>${century}</th>
    </tr>
  `);
}

// for (const item of people) {
//   const age = item.died - item.born;

//   const century = Math.ceil(item.died / 100);

//   let sex;

//   if (item.sex === 'm') {
//     sex = 'Male';
//   } else {
//     sex = 'Female';
//   }

//   const tr = document.createElement('tr');

//   const properties = [item.name, sex, item.born, item.died, age, century];

//   for (const cell of properties) {

//     const th = document.createElement('th');

//     th.textContent = cell;

//     tr.append(th);
//   }

//   table.append(tr);
// }
