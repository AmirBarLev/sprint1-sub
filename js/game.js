'use strict'

//– A Matrix
// containing cell objects:
// Each cell: 
/////
// minesAroundCount: 0,
// isShown: false,
// isMine: false,
// isMarked: true
// This is an object by which the
// board size is set


// This is an object in which you
// can keep and update the
// current game state:
// isOn: Boolean, when true we
// let the user play
// shownCount: How many cells
// are shown
// markedCount: How many cells
// are marked (with a flag)
// secsPassed: How many seconds
// passed 

const gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

// const mat = []

const gLevel = {
    SIZE: 4,
    MINES: 2
}
var gSize = 4
var gBoard
// var minesAroundCount = 0

const FLAG = '🚩'
const MINE = '💣'





function onInit() {
    gBoard = buildBoard()
    setMinesNegsCount(gBoard)
    renderBoard(gBoard)

    console.log('count',)
    // console.log('hey', gBoard)

}





function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        var row = board[i]
        strHTML += '<tr>'
        for (var j = 0; j < row.length; j++) {
            var cell = row[j]
            // figure class name
            var tdId = `cell-${i}-${j}`
            strHTML += `<td class="cell" 
                            onclick="onCellClicked(gBoard)" 
                            ></td>`
        }
        strHTML += '</tr>'

    }

    var elMat = document.querySelector('.board')
    elMat.innerHTML = strHTML
}


function buildBoard() {
    var board = []
    for (var i = 0; i < gSize; i++) {
        board[i] = []
        for (var j = 0; j < gSize; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: false,
                isMine: false,
                isMarked: true,
            }

        }
    }
    // if (board[i][j].isMine === true) minesAroundCount++

    board[1][2].isMine = true
    board[2][3].isMine = true && MINE

    console.table(board)
    // debugger
    // if (board[i][j].isMine === true) {
    // return minesAroundCount++
    // if ((board[i][j]).isMine === true) console.log('hellya', )
    // if (board[i][j].isMine === true)
    return board
}





function setMinesNegsCount(board) {

    for (var i = 0; i < board.length; i++) {

        for (var j = 0; j < board.length; j++) {
            var cell = board[i][j]
            // console.log('cell', cell)
            var count = getAmountOfNeighbours(board, i, j)
            cell.minesAroundCount = count


        }

    }
    console.log('gBoard', gBoard)

}

function getAmountOfNeighbours(board, rowIdx, colIdx, MINE) {
    var amount = 0
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i > board.length - 1) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j > board[i].length - 1 || (i === rowIdx && j === colIdx)) continue
            if (board[i][j].isMine === true) amount++
        }
    }
    return amount
}


// function countNegs(board, rowIdx, colIdx) {
//     var minesAroundCount = 0

//     for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
//         if (i < 0 || i >= board.length) continue

//         for (var j = colIdx - 1; j <= colIdx + 1; j++) {
//             if (j < 0 || j >= board[i].length) continue
//             if (i === rowIdx && j === colIdx) continue
//             // if (board[i][j] === board[i][j].isMine === true) minesAroundCount++

//             // if ((board[i][j]).isMine === true) minesAroundCount++
//             if (board[i][j].isMine === true) {
//                 continue;
//             }
//         }
//     }
//     console.log('negsCount', minesAroundCount)

//     return minesAroundCount
// }


function onCellClicked(elCell, i, j) {
    elCell = document.getElementById('.cell')
    // if (elCell[i][j] === MINE) console.log('gameover');
    
    // if (elCell === gBoard.isMine === true) console.log('gameover');
}


function onCellMarked(elCell) {



}


function checkGameOver() {



}


function expandShown(board, elCell, i, j) {



}

// to add random mines
function addRandMine(board) {
    for (let i = 0; i < gSize.length; i++) {
        board[getRandomIntInclusive(0, gSize)][getRandomIntInclusive(0, gSize)] = MINE


    }
}