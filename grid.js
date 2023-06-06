const GRID_SIZE = 18

function randomPositionInGrid(randomPosition = {x: 0, y: 0}) {
  do {
    randomPosition.x = Math.floor(Math.random() * GRID_SIZE) + 1
    randomPosition.y = Math.floor(Math.random() * GRID_SIZE) + 1

  } while (outsideGrid(randomPosition))
  return randomPosition
}
export function randomGridPosition() {
  return randomPositionInGrid()
}

export function outsideGrid(position) {
  return (
    position.x < 4 || position.x > GRID_SIZE ||
    position.y < 4 || position.y > GRID_SIZE
  )
}