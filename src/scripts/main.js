'use strict';

import people from './lib/people.json';

const tab = document.querySelector('.dashboard');

people.forEach((person) => {
  const age = person.died - person.born;
  const century = Math.ceil(person.died / 100);

  const gender = person.sex === 'm' ? 'Male' : 'Female';

  const row = document.createElement('tr');

  const personData = [
    person.name,
    gender,
    person.born,
    person.died,
    age,
    century,
  ];

  personData.forEach((i) => {
    const td = document.createElement('td');

    td.textContent = i;

    row.append(td);
  });
  tab.append(row);
});

// const tab = document.querySelector('.dashboard');

// people.forEach((person) => {
//   const age = person.died - person.born;
//   const century = Math.ceil(person.died / 100);
//   const gender = person.sex === 'm' ? 'Male' : 'Female';

//   // Создаем готовую строку со всеми ячейками сразу
//   const rowHtml = `
//     <tr>
//       <td>${person.name}</td>
//       <td>${gender}</td>
//       <td>${person.born}</td>
//       <td>${person.died}</td>
//       <td>${age}</td>
//       <td>${century}</td>
//     </tr>
//   `;

//   // Вставляем HTML прямо в конец таблицы
//   tab.insertAdjacentHTML('beforeend', rowHtml);
// });
