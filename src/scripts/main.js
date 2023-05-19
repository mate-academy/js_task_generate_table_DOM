'use strict';

const people = require('./lib/people');

const dashboard = document.querySelector('.dashboard');

function dashboardGenerator(list) {
  for (const value of list) {
    const newRow = document.createElement('tr');

    value.age = value.died - value.born;
    value.century = Math.ceil(value.died / 100);

    for (const key in value) {
      const rowData = document.createElement('td');

      switch (key) {
        case 'name':
          rowData.textContent = value[key];
          newRow.append(rowData);
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
          newRow.append(rowData);
          break;

        case 'born':
          rowData.textContent = value[key];
          newRow.append(rowData);
          break;

        case 'died':
          rowData.textContent = value[key];
          newRow.append(rowData);
          break;

        case 'age':
          rowData.textContent = value[key];
          newRow.append(rowData);
          break;

        case 'century':
          rowData.textContent = value[key];
          newRow.append(rowData);
          break;

        default:
          break;
      }
    }

    dashboard.append(newRow);
  }
}

dashboardGenerator(people);
