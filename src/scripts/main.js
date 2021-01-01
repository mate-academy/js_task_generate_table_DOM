'use strict';

const people = require('./lib/people');

const advancedDB = [ ...people ];

for (let i = 0; i < advancedDB.length; i++) {
  advancedDB[i] = {
    ...advancedDB[i],
    age: advancedDB[i].died - advancedDB[i].born,
    century: Math.ceil(advancedDB[i].died / 100),
  };
}

const table = document.querySelector('.dashboard>tbody');

for (const row of advancedDB) {
  table.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${row.name}</td>
      <td>${row.sex === 'f' ? 'Female' : 'Male'}</td>
      <td>${row.born}</td>
      <td>${row.died}</td>
      <td>${row.age}</td>
      <td>${row.century <= 20 ? row.century + 'th' : row.century + 'st'}</td>
    </tr>`
  );
}
