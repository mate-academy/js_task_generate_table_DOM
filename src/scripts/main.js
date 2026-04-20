'use strict';

const { default: people } = await import('../scripts/lib/people.json', {
  assert: { type: 'json' },
});

const finder = document.querySelector('.dashboard');

function createTableRows(peoples, tbody) {
  peoples.forEach((person) => {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');

    nameTd.textContent = person.name;
    tr.appendChild(nameTd);

    const sexTd = document.createElement('td');

    sexTd.textContent = person.sex;
    tr.appendChild(sexTd);

    const bornTd = document.createElement('td');

    bornTd.textContent = person.born;
    tr.appendChild(bornTd);

    const diedTd = document.createElement('td');

    diedTd.textContent = person.died;
    tr.appendChild(diedTd);

    const liveTd = document.createElement('td');

    liveTd.textContent = person.died - person.born;
    tr.appendChild(liveTd);

    const centurTd = document.createElement('td');

    centurTd.textContent = Math.ceil(person.died / 100);
    tr.appendChild(centurTd);

    tbody.appendChild(tr);
  });
}

let adder = finder ? finder.querySelector('tbody') : null;

if (finder && !adder) {
  adder = document.createElement('tbody');
  finder.appendChild(adder);
}

if (adder) {
  createTableRows(people, adder);
}
