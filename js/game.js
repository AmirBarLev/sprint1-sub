'use strict'

//– A Matrix
// containing cell objects:
// Each cell: 
/////
// minesAroundCount: 4,
// isShown: false,
// isMine: false,
// isMarked: true
// This is an object by which the
// board size is set
const gLevel = {
    SIZE: 4,
    MINES: 2
}


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

// const gGame = {
//     isOn: false,
//     shownCount: 0,
//     markedCount: 0,
//     secsPassed: 0
// }

// const mat = []

var gSize = 4
var gBoard
var negsCount = 0

const FLAG = ''
const MINE = ''
const CELL = '⬛'




function onInit() {
    gBoard = buildBoard()
    renderBoard(gBoard)
    countNegs()
    console.log('count', negsCount)
    // console.log('hey', gBoard)

}


// function renderBoard(board, selector) {

//     var strHTML = '<table> border="0"<tbody>'
//     for (var i = 0; i < mat.length; i++) {

//         strHTML += '<tr>'
//         for (var j = 0; j < mat[0].length; j++) {

//             const cell = mat[i][j]
//             const className = `cell cell-${i}-${j}`

//             strHTML += `<td class="${className}">${cell}</td>`
//         }
//         strHTML += '</tr>'
//     }
//     strHTML += '</tbody></table>'

//     const elContainer = document.querySelector(selector)
//     elContainer.innerHTML = strHTML
// }


function renderBoard(board) {

    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        var row = board[i]
        strHTML += '<tr>'
        for (var j = 0; j < row.length; j++) {
            var cell = row[j]
            // figure class name
            var className = CELL
            var tdId = `cell-${i}-${j}`
            strHTML += `<td id="${tdId}" 
                            onclick="cellClicked(this)" 
                            class="${className}">${CELL}</td>`
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
                minesAroundCount: 0, // this might be where i need to put the negsaourndfuntion
                minesAroundCount: countNegs(),
                isShown: false,
                isMine: false,
                isMarked: true,
            }
        }
    }
    board[1][2].isMine = true
    board[2][3].isMine = true
    console.table(board)
    return board
}

// function createBoard() {
//     var board = []
//     for (var i = 0; i < 3; i++) {
//         board[i] = []
//         for (var j = 0; j < 3; j++) {
//         }
//     }
//     return board

// }




// function createMat(ROWS, COLS) {
//     const mat = []
//     for (var i = 0; i < ROWS; i++) {
//         const row = []
//         for (var j = 0; j < COLS; j++) {
//             row.push('')
//         }
//         mat.push(row)
//     }
//     return mat
// }


function setMinesNegsCount(board) {
    
}

function countNegs(rowIdx, colIdx, MINE) {
    // var negsCount = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= mat.length) continue

        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= mat[i].length) continue
            if (i === rowIdx && j === colIdx) continue
            if (mat[i][j] === MINE) negsCount++
        }
    }
    console.log('negsCount', negsCount)
    return negsCount
}


function onCellClicked(elCell, i, j) {



}


function onCellMarked(elCell) {



}


function checkGameOver() {



}


function expandShown(board, elCell, i, j) {



}
