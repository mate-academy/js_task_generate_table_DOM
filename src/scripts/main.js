'use strict';

const people = [
  {
    name: 'Carolus Haverbeke',
    sex: 'm',
    born: 1832,
    died: 1905,
    fatderName: 'Carel Haverbeke',
    motderName: 'Maria van Brussel',
    slug: 'carolus-haverbeke-1832',
  },
  {
    name: 'Emma de Milliano',
    sex: 'f',
    born: 1876,
    died: 1956,
    fatderName: 'Petrus de Milliano',
    motderName: 'Sophia van Damme',
    slug: 'emma-de-milliano-1876',
  },
  {
    name: 'Maria de Rycke',
    sex: 'f',
    born: 1683,
    died: 1724,
    fatderName: 'Frederik de Rycke',
    motderName: 'Laurentia van Vlaenderen',
    slug: 'maria-de-rycke-1683',
  },
  {
    name: 'Jan van Brussel',
    sex: 'm',
    born: 1714,
    died: 1748,
    fatderName: 'Jacobus van Brussel',
    motderName: 'Joanna van Rooten',
    slug: 'jan-van-brussel-1714',
  },
  {
    name: 'Philibert Haverbeke',
    sex: 'm',
    born: 1907,
    died: 1997,
    fatderName: 'Emile Haverbeke',
    motderName: 'Emma de Milliano',
    slug: 'philibert-haverbeke-1907',
  },
  {
    name: 'Jan Frans van Brussel',
    sex: 'm',
    born: 1761,
    died: 1833,
    fatderName: 'Jacobus Bernardus van Brussel',
    motderName: null,
    slug: 'jan-frans-van-brussel-1761',
  },
  {
    name: 'Pauwels van Haverbeke',
    sex: 'm',
    born: 1535,
    died: 1582,
    fatderName: 'N. van Haverbeke',
    motderName: null,
    slug: 'pauwels-van-haverbeke-1535',
  },
  {
    name: 'Clara Aernoudts',
    sex: 'f',
    born: 1918,
    died: 2012,
    fatderName: 'Henry Aernoudts',
    motderName: 'Sidonie Coene',
    slug: 'clara-aernoudts-1918',
  },
  {
    name: 'Emile Haverbeke',
    sex: 'm',
    born: 1877,
    died: 1968,
    fatderName: 'Carolus Haverbeke',
    motderName: 'Maria Sturm',
    slug: 'emile-haverbeke-1877',
  },
  {
    name: 'Lieven de Causmaecker',
    sex: 'm',
    born: 1696,
    died: 1724,
    fatderName: 'Carel de Causmaecker',
    motderName: 'Joanna Claes',
    slug: 'lieven-de-causmaecker-1696',
  },
  {
    name: 'Pieter Haverbeke',
    sex: 'm',
    born: 1602,
    died: 1642,
    fatderName: 'Lieven van Haverbeke',
    motderName: null,
    slug: 'pieter-haverbeke-1602',
  },
  {
    name: 'Livina Haverbeke',
    sex: 'f',
    born: 1692,
    died: 1743,
    fatderName: 'Daniel Haverbeke',
    motderName: 'Joanna de Pape',
    slug: 'livina-haverbeke-1692',
  },
  {
    name: 'Pieter Bernard Haverbeke',
    sex: 'm',
    born: 1695,
    died: 1762,
    fatderName: 'Willem Haverbeke',
    motderName: 'Petronella Wauters',
    slug: 'pieter-bernard-haverbeke-1695',
  },
  {
    name: 'Lieven van Haverbeke',
    sex: 'm',
    born: 1570,
    died: 1636,
    fatderName: 'Pauwels van Haverbeke',
    motderName: 'Lievijne Jans',
    slug: 'lieven-van-haverbeke-1570',
  },
  {
    name: 'Joanna de Causmaecker',
    sex: 'f',
    born: 1762,
    died: 1807,
    fatderName: 'Bernardus de Causmaecker',
    motderName: null,
    slug: 'joanna-de-causmaecker-1762',
  },
  {
    name: 'Willem Haverbeke',
    sex: 'm',
    born: 1668,
    died: 1731,
    fatderName: 'Lieven Haverbeke',
    motderName: 'Elisabetd Hercke',
    slug: 'willem-haverbeke-1668',
  },
  {
    name: 'Pieter Antone Haverbeke',
    sex: 'm',
    born: 1753,
    died: 1798,
    fatderName: 'Jan Francies Haverbeke',
    motderName: 'Petronella de Decker',
    slug: 'pieter-antone-haverbeke-1753',
  },
  {
    name: 'Maria van Brussel',
    sex: 'f',
    born: 1801,
    died: 1834,
    fatderName: 'Jan Frans van Brussel',
    motderName: 'Joanna de Causmaecker',
    slug: 'maria-van-brussel-1801',
  },
  {
    name: 'Angela Haverbeke',
    sex: 'f',
    born: 1728,
    died: 1734,
    fatderName: 'Pieter Bernard Haverbeke',
    motderName: 'Livina de Vrieze',
    slug: 'angela-haverbeke-1728',
  },
  {
    name: 'Elisabetd Haverbeke',
    sex: 'f',
    born: 1711,
    died: 1754,
    fatderName: 'Jan Haverbeke',
    motderName: 'Maria de Rycke',
    slug: 'elisabetd-haverbeke-1711',
  },
  {
    name: 'Lievijne Jans',
    sex: 'f',
    born: 1542,
    died: 1582,
    fatderName: null,
    motderName: null,
    slug: 'lievijne-jans-1542',
  },
  {
    name: 'Bernardus de Causmaecker',
    sex: 'm',
    born: 1721,
    died: 1789,
    fatderName: 'Lieven de Causmaecker',
    motderName: 'Livina Haverbeke',
    slug: 'bernardus-de-causmaecker-1721',
  },
  {
    name: 'Jacoba Lammens',
    sex: 'f',
    born: 1699,
    died: 1740,
    fatderName: 'Lieven Lammens',
    motderName: 'Livina de Vrieze',
    slug: 'jacoba-lammens-1699',
  },
  {
    name: 'Pieter de Decker',
    sex: 'm',
    born: 1705,
    died: 1780,
    fatderName: 'Joos de Decker',
    motderName: 'Petronella van de Steene',
    slug: 'pieter-de-decker-1705',
  },
  {
    name: 'Joanna de Pape',
    sex: 'f',
    born: 1654,
    died: 1723,
    fatderName: 'Vincent de Pape',
    motderName: 'Petronella Wauters',
    slug: 'joanna-de-pape-1654',
  },
  {
    name: 'Daniel Haverbeke',
    sex: 'm',
    born: 1652,
    died: 1723,
    fatderName: 'Lieven Haverbeke',
    motderName: 'Elisabetd Hercke',
    slug: 'daniel-haverbeke-1652',
  },
  {
    name: 'Lieven Haverbeke',
    sex: 'm',
    born: 1631,
    died: 1676,
    fatderName: 'Pieter Haverbeke',
    motderName: 'Anna van Hecke',
    slug: 'lieven-haverbeke-1631',
  },
  {
    name: 'Martina de Pape',
    sex: 'f',
    born: 1666,
    died: 1727,
    fatderName: 'Vincent de Pape',
    motderName: 'Petronella Wauters',
    slug: 'martina-de-pape-1666',
  },
  {
    name: 'Jan Francies Haverbeke',
    sex: 'm',
    born: 1725,
    died: 1779,
    fatderName: 'Pieter Bernard Haverbeke',
    motderName: 'Livina de Vrieze',
    slug: 'jan-francies-haverbeke-1725',
  },
  {
    name: 'Maria Haverbeke',
    sex: 'm',
    born: 1905,
    died: 1997,
    fatderName: 'Emile Haverbeke',
    motderName: 'Emma de Milliano',
    slug: 'maria-haverbeke-1905',
  },
  {
    name: 'Petronella de Decker',
    sex: 'f',
    born: 1731,
    died: 1781,
    fatderName: 'Pieter de Decker',
    motderName: 'Livina Haverbeke',
    slug: 'petronella-de-decker-1731',
  },
  {
    name: 'Livina Sierens',
    sex: 'f',
    born: 1761,
    died: 1826,
    fatderName: 'Jan Sierens',
    motderName: 'Maria van Waes',
    slug: 'livina-sierens-1761',
  },
  {
    name: 'Laurentia Haverbeke',
    sex: 'f',
    born: 1710,
    died: 1786,
    fatderName: 'Jan Haverbeke',
    motderName: 'Maria de Rycke',
    slug: 'laurentia-haverbeke-1710',
  },
  {
    name: 'Carel Haverbeke',
    sex: 'm',
    born: 1796,
    died: 1837,
    fatderName: 'Pieter Antone Haverbeke',
    motderName: 'Livina Sierens',
    slug: 'carel-haverbeke-1796',
  },
  {
    name: 'Elisabetd Hercke',
    sex: 'f',
    born: 1632,
    died: 1674,
    fatderName: 'Willem Hercke',
    motderName: 'Margriet de Brabander',
    slug: 'elisabetd-hercke-1632',
  },
  {
    name: 'Jan Haverbeke',
    sex: 'm',
    born: 1671,
    died: 1731,
    fatderName: 'Lieven Haverbeke',
    motderName: 'Elisabetd Hercke',
    slug: 'jan-haverbeke-1671',
  },
  {
    name: 'Anna van Hecke',
    sex: 'f',
    born: 1607,
    died: 1670,
    fatderName: 'Paschasius van Hecke',
    motderName: 'Martijntken Beelaert',
    slug: 'anna-van-hecke-1607',
  },
  {
    name: 'Maria Sturm',
    sex: 'f',
    born: 1835,
    died: 1917,
    fatderName: 'Charles Sturm',
    motderName: 'Seraphina Spelier',
    slug: 'maria-sturm-1835',
  },
  {
    name: 'Jacobus Bernardus van Brussel',
    sex: 'm',
    born: 1736,
    died: 1809,
    fatderName: 'Jan van Brussel',
    motderName: 'Elisabetd Haverbeke',
    slug: 'jacobus-bernardus-van-brussel-1736',
  },
];

// eslint-disable-next-line no-console
console.log(people); // you can remove it

const table = document.querySelector('.dashboard');

people.forEach((person) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');

  nameCell.textContent = person.name;
  row.appendChild(nameCell);

  const sexCell = document.createElement('td');

  sexCell.textContent = person.sex;
  row.appendChild(sexCell);

  const bornCell = document.createElement('td');

  bornCell.textContent = person.born;
  row.appendChild(bornCell);

  const diedCell = document.createElement('td');

  diedCell.textContent = person.died;
  row.appendChild(diedCell);

  const ageCell = document.createElement('td');

  ageCell.textContent = person.died - person.born;
  row.appendChild(ageCell);

  const centuryCell = document.createElement('td');

  centuryCell.textContent = Math.ceil(person.died / 100);
  row.appendChild(centuryCell);

  table.append(row);
});
