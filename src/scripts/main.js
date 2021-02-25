'use strict';

const people = require('./lib/people');
const table = document.querySelector('.dashboard tbody');

people.forEach(person => {
  table.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${person.name}</td>
      <td>${person.sex === 'm' ? 'Male' : 'Female'}</td>
      <td>${person.born}</td>
      <td>${person.died}</td>
      <td>${person.died - person.born}</td>
      <td>${Math.ceil(person.died / 100)}</td>
    </tr>`
  );
});

// <--------one more solution---------->
// <-----------with append------------->

// for (const person of people) {
//   const tr = document.createElement('tr');

// const td = document.createElement('td');
// const tdGender = document.createElement('td');
// const tdBorn = document.createElement('td');
// const tdDied = document.createElement('td');
// const tdAge = document.createElement('td');
// const tdСentury = document.createElement('td');

// td.append(person.name);
// tdGender.append(person.sex === 'm' ? 'Male' : 'Female');
// tdBorn.append(person.born);
// tdDied.append(person.died);
// tdAge.append(person.died - person.born);
// tdСentury.append(Math.ceil(person.died / 100));
// tr.append(td, tdGender, tdBorn, tdDied, tdAge, tdСentury);

//   table.insertAdjacentElement('beforeend', tr);
// }
