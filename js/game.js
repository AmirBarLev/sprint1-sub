'use strict'

/////
const gBoard = {
    //– A Matrix
    // containing cell objects:
    // Each cell: 
    minesAroundCount: 4,
    isShown: false,
    isMine: false,
    isMarked: true
}
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


/////
const gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function onInit() {
    renderBoard(board)
    // gBoard = buildBoard()
    console.log('hey', gBoard)

}

renderBoard()
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

var board = [1,2,3,4,5]

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var cellClass = (board[i][j]) ? 'taken' : ''
            var cellData = 'data-i="' + i + '" data-j="' + j + '"'
            strHTML += `
    <td class="cell ${cellClass}" ${cellData} onclick="onCellClick(${i}, ${j})">
    ${currCell}
    </td>
    `
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML

}



function createBoard() {
    var board = []
    for (var i = 0; i < 3; i++) {
        board[i] = []
        for (var j = 0; j < 3; j++) {
        }
    }
    return board

}




function createMat(ROWS, COLS) {
    const mat = []
    for (var i = 0; i < ROWS; i++) {
        const row = []
        for (var j = 0; j < COLS; j++) {
            row.push('')
        }
        mat.push(row)
    }
    return mat
}


function setMinesNegsCount(board) {



}




function onCellClicked(elCell, i, j) {



}


function onCellMarked(elCell) {



}


function checkGameOver() {



}


function expandShown(board, elCell, i, j) {



}
