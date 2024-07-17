'use strict';
import { people } from '../data/people';

people.forEach(({ name: fullName, sex, born, died }) => {
  const age = died - born;
  const century = Math.ceil(died / 100);
  const array = [fullName, sex, born, died, age, century];
  const tr = document.createElement('tr');

  document.querySelectorAll('th').forEach((_, i) => {
    const td = document.createElement('td');
    const text = document.createTextNode(array[i]);

    td.appendChild(text);
    tr.appendChild(td);
  });
  document.querySelector('tbody').insertAdjacentElement('beforeend', tr);
});
