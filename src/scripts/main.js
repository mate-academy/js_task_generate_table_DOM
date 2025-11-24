'use strict';

import people from './people.json';

const table = document.querySelector('.dashboard');

table.innerHTML += people
  .map(({ name: personName, gender, born, died }) => {
    const age = died - born;
    const century = Math.ceil(died / 100);

    return `
      <tr>
        <td>${personName}</td>
        <td>${gender}</td>
        <td>${born}</td>
        <td>${died}</td>
        <td>${age}</td>
        <td>${century}</td>
      </tr>
    `;
  })
  .join('');
