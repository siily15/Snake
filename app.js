function convertToPixles(n) {
    if (n > 79) {
        n = 79
    }
    if (n < 0) {
        n = 0
    }
    return n * 8
}

function draw() {
    uptadeSnakeLocation()
    drawSnake()
    setTimeout(() => {
        window.requestAnimationFrame(draw)
    }, gameSpeed);
}

function drawSnake() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = 'black'
    context.strokeStyle = 'white'
    context.lineWidth = 1

    snakeCoordinates.forEach(c => {
        context.fillRect(convertToPixles(c[0]), convertToPixles(c[1]), 8, 8)
        context.strokeRect(convertToPixles(c[0]), convertToPixles(c[1]), 8, 8)
    })
}

function uptadeSnakeLocation() {
    let newX, newY

    switch (direction) {
        case 'up':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1] - 1
            break
        case 'down':
            newX = snakeCoordinates[0][0]
            newY = snakeCoordinates[0][1] + 1
            break
        case 'left':
            newX = snakeCoordinates[0][0] - 1
            newY = snakeCoordinates[0][1]
            break
        case 'right':
            newX = snakeCoordinates[0][0] + 1
            newY = snakeCoordinates[0][1]
            break

    }
    if (JSON.stringify[newX, newY] != JSON.stringify(foodCoordinates )) {

    }

    snakeCoordinates.unshift([newX, newY])
    snakeCoordinates.pop()
}

function drawFood() {
    context.beginPath()
    context.arc(convertToPixles(foodCoordinates[0]) + 4, convertToPixles(foodCoordinates[1]) + 4, 4, 0, Math.PI * 2, true)
    context.fillStyle = 'red'
    context.fill()
}

function uptadeFoodLocation () {
    let x, y

    do {
        x = Math.floor(Math.round() * 80)
        y = Math.floor(Math.round() * 80)
    } while ( snakeCoordinates.includes([c, y]) );
    return x, y
}

let snakeCoordinates = [
    [40, 40],
    [40, 41],
    [39, 41],
    [38, 41]
]
let foodCoordinates = uptadeFoodCoordinates()

const canvas = document.getElementById('gameBoardCanvas')
const context = canvas.getContext('2d')
let direction = 'up'
let gameSpeed = 90

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (direction == 'left' / direction == 'right'){
            direction = 'up'
            } else if (direction == 'down')
                isGameOver = true
            break
        case 'ArrowDown':
            direction = 'down'
            break
        case 'ArrowLeft':
            direction = 'left'
            break
        case 'ArrowRight':
            direction = 'right'
            break;

    }
})

draw()
