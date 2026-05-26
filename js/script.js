const bingoBtns = document.querySelectorAll('.bingo-square:not(.free)');
const boardSelect = document.querySelector('.board-select');

const nameInput = document.querySelector('.name-input');
const boardItems = document.querySelector('.board-items');

function changeValue(cell) {
    cell.classList.toggle('selected');
}


function genNewBoard() {
    const boardValues = getDefaultBoards()[getCurrentBoard()].values;
    const randomValues = [];
    while (randomValues.length < 24) {
        const randomIndex = Math.floor(Math.random() * boardValues.length);
        if (!randomValues.includes(boardValues[randomIndex])) {
            randomValues.push(boardValues[randomIndex]);
        }
    }
    bingoBtns.forEach((btn, index) => {
        if (btn.dataset.value !== 'free') {
            btn.textContent = randomValues[index];
            btn.classList.remove('selected');
        }
    });
}
function selectBoard() {
    setCurrentBoard(boardSelect.value);
    nameInput.value = getDefaultBoards()[getCurrentBoard()].name;
    boardItems.value = getDefaultBoards()[getCurrentBoard()].values.join('\n');
    genNewBoard();
}

function selectDefaultBoard() {

}

function saveBoardName() {
    const boardName = nameInput.value.trim();
    if (boardName === '') {
        alert('Board name cannot be empty.');
        return;
    }
    const defaultBoards = getDefaultBoards();
    defaultBoards[getCurrentBoard()].name = boardName;
    setDefaultBoards(defaultBoards);
    alert('Board name updated successfully!');
    updateBoardSelectOptions();
    boardSelect.value = getCurrentBoard();
}
function deleteCurrentBoard() {
    if (getDefaultBoards().length === 1) {
        alert('You cannot delete the last remaining board.');
        return;
    }
    if (confirm('Are you sure you want to delete this board? This action cannot be undone.')) {
        const defaultBoards = getDefaultBoards();
        delete defaultBoards[getCurrentBoard()];
        setDefaultBoards(defaultBoards);
        alert('Board deleted successfully!');
        setCurrentBoard(Object.keys(defaultBoards)[0]);
        updateBoardSelectOptions();
        boardSelect.value = getCurrentBoard();
        selectBoard();
    }
}

function updateBoardValues() {
    const boardValues = getDefaultBoards()[getCurrentBoard()].values;
    const newValues = boardItems.value.split('\n').filter(item => item.trim() !== '');
    if (newValues.length < 24) {
        alert('Please enter at least 24 values for the bingo board.');
        return;
    }
    boardValues.length = 0; // Clear existing values
    newValues.forEach(value => boardValues.push(value.trim()));
    const defaultBoards = getDefaultBoards();
    defaultBoards[getCurrentBoard()].values = boardValues;
    setDefaultBoards(defaultBoards);
    alert('Board values updated successfully!');
    genNewBoard();
}

function importNewBoard() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                const importedBoard = JSON.parse(event.target.result);
                if (!importedBoard.name || !importedBoard.values || importedBoard.values.length < 24) {
                    alert('Invalid board format. Please ensure the JSON has a name and at least 24 values.');
                    return;
                }
                const defaultBoards = getDefaultBoards();
                const newBoardKey = `customBoard${Date.now()}`;
                defaultBoards[newBoardKey] = {
                    name: importedBoard.name,
                    values: importedBoard.values
                };
                setDefaultBoards(defaultBoards);
                alert('Board imported successfully!');
                updateBoardSelectOptions();
                boardSelect.value = newBoardKey;
                selectBoard();
            }
            catch (error) {
                alert('Error importing board. Please ensure the file is a valid JSON.');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function updateBoardSelectOptions() {
    const defaultBoardNames = Object.values(getDefaultBoards()).map(board => board.name);
    boardSelect.innerHTML = '';
    defaultBoardNames.forEach((name, index) => {
        const option = document.createElement('option');
        option.value = Object.keys(getDefaultBoards())[index];
        option.textContent = name;
        boardSelect.appendChild(option);
    });
}

function createNewBoard() {
    const newBoardKey = `customBoard${Date.now()}`;
    const defaultBoards = getDefaultBoards();
    defaultBoards[newBoardKey] = {
        name: `Custom Board ${Object.keys(defaultBoards).length + 1}`,
        values: ["Custom 1", "Custom 2", "Custom 3", "Custom 4", "Custom 5", "Custom 6", "Custom 7", "Custom 8", "Custom 9", "Custom 10", "Custom 11", "Custom 12", "Custom 13", "Custom 14", "Custom 15", "Custom 16", "Custom 17", "Custom 18", "Custom 19", "Custom 20", "Custom 21", "Custom 22", "Custom 23", "Custom 24"]
    };
    setDefaultBoards(defaultBoards);
    alert('New board created successfully! Please update the board values and name.');
    updateBoardSelectOptions();
    boardSelect.value = newBoardKey;
    selectBoard();
}

genNewBoard();
updateBoardSelectOptions();
boardSelect.value = getCurrentBoard();
nameInput.value = getDefaultBoards()[getCurrentBoard()].name;
boardItems.value = getDefaultBoards()[getCurrentBoard()].values.join('\n');
