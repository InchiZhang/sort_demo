import './style.scss';
import { isNumber, isTruly } from './src/utils.js';

const input = document.querySelector('input');
const button = document.querySelector('#add');
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');



const indexNumber = [];
const numberList = [];
const stringList = [];

button.addEventListener('click', () => {
  if (isTruly(input.value) && isNumber(+input.value)) {
    numberList.push(+input.value);
  } else if (isTruly(input.value)){
    stringList.push(input.value);
  }

  input.value = '';

  numberList.sort((a, b) => a - b);
  stringList.sort();

  const longerArray = Math.max(numberList.length, stringList.length);

  for (let i = 0; i < longerArray; i++) {
    indexNumber[i] = i + 1;
  }

  renderTable();
});

function renderTable() {
  const existingRows = tbody.querySelectorAll('tr');

  for (let i = 0; i < existingRows.length; i++) {
    const row = existingRows[i];
    const th = row.querySelector('th');
    const tdNumber = row.querySelector('.number');
    const tdString = row.querySelector('.string');

    if (indexNumber[i]) {
      th.textContent = indexNumber[i];
    } else {
      th.textContent = '';
    }

    if (numberList[i]) {
      tdNumber.textContent = numberList[i];
    } else {
      tdNumber.textContent = '';
    }

    if (stringList[i]) {
      tdString.textContent = stringList[i];
    } else {
      tdString.textContent = '';
    }
  }

  for (let i = existingRows.length; i < indexNumber.length; i++) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const tdNumber = document.createElement('td');
    const tdString = document.createElement('td');

    th.textContent = indexNumber[i] || '';
    tdNumber.textContent = numberList[i] || '';
    tdString.textContent = stringList[i] || '';

    tr.appendChild(th);
    tr.appendChild(tdNumber).classList.add('number');
    tr.appendChild(tdString).classList.add('string');

    tbody.appendChild(tr);
  }
}