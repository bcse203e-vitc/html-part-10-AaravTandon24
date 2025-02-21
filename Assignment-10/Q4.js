const numberInput = document.getElementById('numberInput');
const generateButton = document.getElementById('generateButton');
const multiplicationTable = document.getElementById('multiplicationTable');

function generateTable() {
    const number = parseInt(numberInput.value);
    multiplicationTable.innerHTML = '';

    if (isNaN(number) || number < 1 || number > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        cell1.textContent = `${number} x ${i}`;
        const cell2 = document.createElement('td');
        cell2.textContent = `= ${number * i}`;
        row.appendChild(cell1);
        row.appendChild(cell2);
        multiplicationTable.appendChild(row);
    }
}

generateButton.addEventListener('click', generateTable);
