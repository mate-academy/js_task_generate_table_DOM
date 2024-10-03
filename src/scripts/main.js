'use strict';
import { people } from './people.js';

const table = document.querySelector('.dashboard');

function createRow(item) {
  // eslint-disable-next-line no-shadow
  const { name, sex, born, died } = item;
  const age = died - born;
  const century = Math.ceil(died / 100);
  const gender = sex === 'm' ? 'Male' : 'Female';

  table.firstElementChild.insertAdjacentHTML(
    'beforeend',
    `<tr>
      <td>${name}</td>
      <td>${gender}</td>
      <td>${born}</td>
      <td>${died}</td>
      <td>${age}</td>
      <td>${century}</td>
    </tr>`,
  );
}

people.forEach((person) => createRow(person));
