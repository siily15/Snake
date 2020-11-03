
function convertToPixles( n) {
    if (n > 79) {
        n = 79
    }
    if (n < 0 ) {
        n = 0
    }
    return n * 8
}

function updateSnake () {
    context.strokeStyle = 'white'
    context.lineWidth = 1

    snakeCoordinates.forEach ( c => {
    context.fillRect(convertToPixles(c[0]), convertToPixles(c[1]), 8, 8)
    context.strokeRect(convertToPixles(c[0]), convertToPixles(c[1]), 8, 8)


    })
}

let snakeCoordinates = [
    [40, 40],
    [40, 41],
    [39, 41],
    [38, 41]
]

const canvas = document.getElementById('gameCanvas')
const context = canvas.getContext('2d')

updateSnake()
