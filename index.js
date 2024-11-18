
// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно


function createPithagorTable(size) {
   const table = document.getElementById('pithagorTable');
   for (let i = 0; i <= size; i++) {
      let row = document.createElement('tr');
      for (let k = 0; k <= size; k++) {
         let cell = document.createElement(i === 0 || k === 0 ? 'th' : 'td');
         cell.textContent = (i === 0 ? k : k === 0 ? i : i * k);
         row.appendChild(cell);
      }
      table.appendChild(row);
   }
}

createPithagorTable(10);

