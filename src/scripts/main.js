'use strict';

const people = require('./lib/people');

const bord = document.querySelector('.dashboard');

function dashboardGenerator(list) {
  for (const value of [...list]) {
    const newRow = document.createElement('tr');

    delete value.slug;

    for (const key in value) {
      const rowData = document.createElement('th');

      switch (key) {
        case 'name':
          rowData.textContent = value[key];
          break;

        case 'sex':
          switch (value[key]) {
            case 'f':
              rowData.textContent = 'female';
              break;

            case 'm':
              rowData.textContent = 'male';
              break;

            default:
              break;
          }
          break;

        case 'born':
          rowData.textContent = value[key];
          break;

        case 'died':
          rowData.textContent = value[key];
          break;

        case 'fatherName':
          rowData.textContent = value.died - value.born;
          break;

        case 'motherName':
          rowData.textContent = Math.ceil(value.died / 100);
          break;

        default:
          break;
      }

      newRow.append(rowData);
    }

    bord.append(newRow);
  }
}

dashboardGenerator(people);
