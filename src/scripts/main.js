'use strict';

import people from './lib/people.json' with { type: 'json' };

// eslint-disable-next-line no-console


// write your code here
//people масив об'єктів

const table = document.querySelector('.dashboard');

people.forEach(function(eachobj) {

  const newtr = document.createElement('tr');

  const maling = eachobj.sex === 'm' ? 'Male' : (eachobj.sex === 'f' ? 'Female' : eachobj.sex);
  const age = String(eachobj.died - eachobj.born);
  const century = String(Math.ceil(eachobj.died / 100));

  const rawData = {
    Name: eachobj.name,
    sex: maling,
    born: eachobj.born,
    died: eachobj.died,
    age: age,
    century: century,

  };

  for (const key in rawData) {

    const current = rawData[key];
    const newtd = document.createElement('td');
    newtd.textContent = current;
    newtr.append(newtd);
  }

  table.append(newtr);

});

