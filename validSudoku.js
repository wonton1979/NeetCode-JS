/*Valid Sudoku
Solved

You are given a a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

    Each row must contain the digits 1-9 without duplicates.
    Each column must contain the digits 1-9 without duplicates.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

    Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.*/

function isValidSudoku(board) {
    const columns = [];
    let subColumns = [];
    const outerBoxes = [];
    let boxes = [];
    let boxRow = [];
    let smallBox = [];
    let increase = 3;
    let start = 0;
    let isValid = true;
    for(let i = 0; i < board.length; i++){
        board.forEach((row,topIndex)=>{
            if(i < 3){
                row.forEach((cell,index)=>{
                    if( index >=start && index < increase){
                        boxRow.push(cell);
                    }
                })
            }
            boxes.push([...boxRow])
            subColumns.push(row[i])
            boxRow = []
        })
        if(i<3){
            start += 3
            increase += 3
            outerBoxes.push(boxes)
            boxes =[]
        }
        columns.push(subColumns)
        subColumns = [];
        boxes = []
    }
    start = 0
    increase = 9;
    outerBoxes.flat(Infinity).forEach((element,index)=>{
        if(index >= start && index < increase){
            smallBox.push(element)
        }
        if((index+1) % 9 === 0)
        {
            start += 9;
            increase += 9;
            boxes.push(smallBox)
            smallBox = [];
        }

    })

    isValid = isValidCheck(board)
    if(!isValid){
        return false;
    }
    isValid = isValidCheck(columns)
    if(!isValid){
        return false;
    }
    isValid = isValidCheck(boxes)

    return isValid;
}

function isValidCheck(arr){
    let isValid = true;
    const validFilter = (arr.map((row)=>{
        return  row.filter((element)=>{
            if(element !== "."){
                return element;
            }
        })
    }))

    validFilter.forEach((element)=>{
        const setElement = new Set(element);
        if(element.length !== setElement.size){
            isValid = false;
        }
    })

    return isValid;
}

board =
    [["1","2",".",".","3",".",".",".","."],
        ["4",".",".","5",".",".",".",".","."],
        [".","9","1",".",".",".",".",".","3"],
        ["5",".",".",".","6",".",".",".","4"],
        [".",".",".","8",".","3",".",".","5"],
        ["7",".",".",".","2",".",".",".","6"],
        [".",".",".",".",".",".","2",".","."],
        [".",".",".","4","1","9",".",".","8"],
        [".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))