const board = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

const start = () => {
    for(let i=0; i<10; i++){
        const x = Math.floor(Math.random() * board.length)
        const y = Math.floor(Math.random() * board[x].length)
        turn(x, y)
    }
    finalWindow = document.querySelector('#win')
    finalWindow.style.display = "none"
}


const turn = (x, y) => {
    const clicked = document.querySelector(`#x${x}y${y}`)
    if (board[x][y] === 0) board[x][y] = 1
    else board[x][y] = 0

    if (x - 1 >= 0) {
        if (board[x - 1][y] === 0) board[x - 1][y] = 1
        else board[x - 1][y] = 0
    }

    if (x + 1 < board.length) {
        if (board[x + 1][y] === 0) board[x + 1][y] = 1
        else board[x + 1][y] = 0
    }

    if (y - 1 >= 0) {
        if (board[x][y - 1] === 0) board[x][y - 1] = 1
        else board[x][y - 1] = 0
    }

    if (y + 1 < board[x].length) {
        if (board[x][y + 1] === 0) board[x][y + 1] = 1
        else board[x][y + 1] = 0
    }

    board.map((row, i) => {
        row.map((col, j) => {
            const neighbor = document.querySelector(`#x${i}y${j}`)
            if (col === 1)
                neighbor.className = "cell on"
            else
                neighbor.className = "cell"
        })
    })
    winDetection()

}

const winDetection = () => {
    let win = 0
    board.map((row, i) => {
        row.map((cell, j) => {
            if(cell === 0 ) win++
        })
    })
    if(win === board.length*board[0].length){
        finalWindow = document.querySelector('#win')
        finalWindow.style.display = "flex"
    }

}