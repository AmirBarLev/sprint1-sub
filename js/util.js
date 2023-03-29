'use strict'

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

function renderBoard(mat, selector) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}">${cell}</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'

    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

function getAmountOfNeighbours(BOARD, ROW, COL, ITEM) {
    var amount = 0
    for (var i = ROW - 1; i <= ROW + 1; i++) {
        if (i < 0 || i > BOARD.length - 1) continue
        for (var j = COL - 1; j <= COL + 1; j++) {
            if (j < 0 || j > BOARD[i].length - 1 || (i === ROW && j === COL)) continue
            if (BOARD[i][j] === ITEM) amount++
        }
    }
    return amount
}
// random mines setter
function getRandomOrderNumbersArray(MAX) {
    const nums = getArrayWithAscNums(MAX)
    var res = []
    for (var i = 0; i < MAX; i++) {
        res[i] = drawNum(nums)
    }
    return res
}
//random mines setter
function drawNum(nums) {
    return nums.splice(getRandomInt(0, nums.length), 1)[0]
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}